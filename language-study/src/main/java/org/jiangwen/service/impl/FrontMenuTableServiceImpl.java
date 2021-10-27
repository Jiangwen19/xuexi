package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.common.resvo.ResMenuVo;
import org.jiangwen.entity.FrontMenuTable;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.mapper.FrontMenuTableMapper;
import org.jiangwen.mapper.UserInfoMapper;
import org.jiangwen.service.FrontMenuTableService;
import org.jiangwen.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public static final Map<Integer, String> MENUTYPE = new HashMap<>() {
        {
            put(0, "目录");
            put(1, "菜单");
            put(2, "按钮");
        }
    };

    public static final Map<Integer, String> MENUSTATU = new HashMap<>() {
        {
            put(0, "正常");
            put(1, "禁用");
            put(2, "异常");
        }
    };

    @Override
    public List<ResMenuVo> getCurrentUserNav() {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserInfo userInfo = userInfoService.getByUsername(username);

        List<Long> menuIds = userInfoMapper.getNavMenuIds(userInfo.getUserId());
        List<FrontMenuTable> menus = this.listByIds(menuIds);
        menus.sort(Comparator.comparing(FrontMenuTable::getOrdernum));

        // 转树状结构
        List<FrontMenuTable> menuTree = buildTreeMenu(menus);
        // 实体转Vo
        return convert(menuTree);

    }

    private List<ResMenuVo> convert(List<FrontMenuTable> menuTree) {
        List<ResMenuVo> menuDtos = new ArrayList<>();

        menuTree.forEach(m -> {
            ResMenuVo resMenuVo = new ResMenuVo();

            resMenuVo.setMenuId(m.getFrontMenuId());
            resMenuVo.setOnlyCode(m.getPerms());
            resMenuVo.setTitle(m.getMenuName());
            resMenuVo.setComponent(m.getComponent());
            resMenuVo.setPath(m.getPath());
            resMenuVo.setIcon(m.getIcon());
            resMenuVo.setMenuType(MENUTYPE.get(m.getMenuType()));
            resMenuVo.setOrderNum(m.getOrdernum());
            resMenuVo.setState(MENUSTATU.get(m.getStatu()));

            if (m.getChildren().size() > 0) {
                // 子节点递归调用当前方法
                resMenuVo.setChildren(convert(m.getChildren()));
            }

            menuDtos.add(resMenuVo);
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

//        System.out.println(JSONUtil.toJsonStr(finalMenus));

        return finalMenus;

    }

    @Override
    public List<FrontMenuTable> tree() {
        // 获取所有菜单信息
        List<FrontMenuTable> frontMenus = this.list(new QueryWrapper<FrontMenuTable>().orderByAsc("ordernum"));

        // 转成树状结构
        return buildTreeMenu(frontMenus);
    }
}
