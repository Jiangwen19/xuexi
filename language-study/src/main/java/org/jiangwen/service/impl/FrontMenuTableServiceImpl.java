package org.jiangwen.service.impl;

import cn.hutool.json.JSONUtil;
import org.jiangwen.common.dto.SysMenuDto;
import org.jiangwen.entity.FrontMenuTable;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.mapper.FrontMenuTableMapper;
import org.jiangwen.mapper.UserInfoMapper;
import org.jiangwen.service.FrontMenuTableService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Service
public class FrontMenuTableServiceImpl extends ServiceImpl<FrontMenuTableMapper, FrontMenuTable> implements FrontMenuTableService {

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    UserInfoMapper userInfoMapper;

    @Override
    public List<SysMenuDto> getCurrentUserNav() {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserInfo userInfo = userInfoService.getByUsername(username);

        List<Long> menuIds = userInfoMapper.getNavMenuIds(userInfo.getUserId());
        List<FrontMenuTable> menus = this.listByIds(menuIds);

        // 转树状结构
        List<FrontMenuTable> menuTree = buildTreeMenu(menus);
        // 实体转Dto
        return convert(menuTree);

    }

    private List<SysMenuDto> convert(List<FrontMenuTable> menuTree) {
        List<SysMenuDto> menuDtos = new ArrayList<>();

        menuTree.forEach(m->{
            SysMenuDto dto = new SysMenuDto();
            dto.setMenuId(m.getFrontMenuId());
            dto.setName(m.getPerms());
            dto.setTitle(m.getMenuName());
            dto.setComponent(m.getComponent());
            dto.setPath(m.getPath());

            if(m.getChildren().size()>0){
                // 子节点递归调用当前方法
                dto.setChildren(convert(m.getChildren()));
            }

            menuDtos.add(dto);
        });

        return menuDtos;
    }

    private List<FrontMenuTable> buildTreeMenu(List<FrontMenuTable> menus) {

        List<FrontMenuTable> finalMenus = new ArrayList<>();

        // 先各自寻找到各自的子类
        for (FrontMenuTable menu : menus) {
            for (FrontMenuTable e : menus) {
                if (menu.getFrontMenuId() == e.getParentId()) {
                    menu.getChildren().add(e);
                }
            }

            // 提取父节点
            if (menu.getParentId() == 0L) {
                finalMenus.add(menu);
            }

        }

        System.out.println(JSONUtil.toJsonStr(finalMenus));

        return finalMenus;

    }
}
