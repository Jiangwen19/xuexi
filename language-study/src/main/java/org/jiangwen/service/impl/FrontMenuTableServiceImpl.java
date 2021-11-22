package org.jiangwen.service.impl;

import cn.hutool.core.map.MapUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.apache.commons.lang3.StringUtils;
import org.jiangwen.common.resvo.FrontMenu;
import org.jiangwen.common.resvo.PathComponentVo;
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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

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
    public Map<Object, Object> getCurrentUserNav() {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserInfo userInfo = userInfoService.getByUsername(username);

        List<Long> menuIds = userInfoMapper.getNavMenuIds(userInfo.getUserId());
        List<FrontMenuTable> menus = this.listByIds(menuIds);
        menus.sort(Comparator.comparing(FrontMenuTable::getOrdernum));

        // 转树状结构
        List<FrontMenuTable> menuTree = buildTreeMenu(menus);

        // 实体转Vo
        List<ResMenuVo> frontMenus = convert(menuTree);
        List<PathComponentVo> pathComponents = findPath(menus);

        return MapUtil.builder()
                .put("frontMenus", frontMenus)
                .put("pathComponents", pathComponents)
                .map();

    }

    private List<PathComponentVo> findPath(List<FrontMenuTable> menus) {
        List<PathComponentVo> pathComponentVo = new ArrayList<>();
        menus.forEach(p -> {
            if (StringUtils.isNotBlank(p.getComponent()) && StringUtils.isNotBlank(p.getPath())) {
                PathComponentVo pathComponent = new PathComponentVo();
                pathComponent.setComponent(p.getComponent());
                pathComponent.setPath(p.getPath());
                pathComponent.setTitle(p.getMenuName());

                pathComponentVo.add(pathComponent);
            }
        });

        return pathComponentVo;
    }

    private List<ResMenuVo> convert(List<FrontMenuTable> menuTree) {
        List<ResMenuVo> menuDtos = new ArrayList<>();

        for (FrontMenuTable m : menuTree) {
            ResMenuVo resMenuVo = new ResMenuVo();

            resMenuVo.setMenuId(m.getFrontMenuId());
            resMenuVo.setOnlyCode(m.getPerms());
            resMenuVo.setTitle(m.getMenuName());
            resMenuVo.setComponent(m.getComponent());
            resMenuVo.setPath(m.getPath());
            resMenuVo.setIcon(m.getIcon());
            resMenuVo.setMenuType(m.getMenuType());
            resMenuVo.setOrderNum(m.getOrdernum());
            resMenuVo.setState(m.getStatu());

            if (m.getChildren().size() > 0) {
                // 子节点递归调用当前方法
                resMenuVo.setChildren(convert(m.getChildren()));
            }

            menuDtos.add(resMenuVo);
        }

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
    public List<FrontMenu> tree() {
        // 获取所有菜单信息
        List<FrontMenuTable> frontMenus = this.list(new QueryWrapper<FrontMenuTable>().orderByAsc("ordernum"));

        // 转成树状结构
        List<FrontMenuTable> menuList = buildTreeMenu(frontMenus);
        return convertMenu(0, "", menuList);
    }

    private List<FrontMenu> convertMenu(Integer level, String key, List<FrontMenuTable> menus) {
        List<FrontMenu> frontMenus = new ArrayList<>();
        level++;
        for (int i = 0; i < menus.size(); i++) {
            FrontMenu frontMenu = new FrontMenu();

            frontMenu.setLevel(level);
            if (level == 1) {
                frontMenu.setKey(String.valueOf(i + 1));
            } else {
                frontMenu.setKey(key.concat("-").concat(String.valueOf(i + 1)));
            }
            frontMenu.setMenuId(menus.get(i).getFrontMenuId());
            frontMenu.setTitle(menus.get(i).getMenuName());
            frontMenu.setOnlyCode(menus.get(i).getPerms());
            frontMenu.setPath(menus.get(i).getPath());
            frontMenu.setComponent(menus.get(i).getComponent());
            frontMenu.setIcon(menus.get(i).getIcon());
            frontMenu.setMenuType(menus.get(i).getMenuType());
            frontMenu.setOrderNum(menus.get(i).getOrdernum());
            frontMenu.setState(menus.get(i).getStatu());
            if (menus.get(i).getChildren().size() != 0) {
                frontMenu.setChildren(convertMenu(level, frontMenu.getKey(), menus.get(i).getChildren()));
            } else {
                frontMenu.setChildren(null);
            }
            frontMenus.add(frontMenu);
        }
        return frontMenus;
    }
}
