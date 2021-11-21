package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.FrontMenuTable;
import org.jiangwen.entity.RoleTable;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.mapper.UserInfoMapper;
import org.jiangwen.service.FrontMenuTableService;
import org.jiangwen.service.RoleTableService;
import org.jiangwen.service.UserInfoService;
import org.jiangwen.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {
    @Autowired
    RoleTableService roleTableService;

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    UserInfoMapper userInfoMapper;

    @Autowired
    FrontMenuTableService frontMenuTableService;


    @Autowired
    RedisUtil redisUtil;

    @Override
    public UserInfo getByUsername(String username) {
        return getOne(new QueryWrapper<UserInfo>().eq("username", username));
    }

    @Override
    public String getUserAuthorityInfo(long userId) {

        // ROLE_admin,ROLE_sys:user:list,....
        String authority = "";

        if (redisUtil.hasKey("GrantedAuthority:" + userId)) {
            authority = (String) redisUtil.get("GrantedAuthority:" + userId);
        } else {
            // 获取角色编码
            List<RoleTable> roles = roleTableService.list(new QueryWrapper<RoleTable>()
                    .inSql("role_id", "select role_id from user_role_table where user_id = " + userId));

            if (roles.size() > 0) {
                String roleSymbols = roles.stream().map(r -> "ROLE_" + r.getSymbol()).collect(Collectors.joining(","));
                authority = roleSymbols.concat(",");
            }

            // 获取菜单操作编码
            List<Long> frontMenuIds = userInfoMapper.getNavMenuIds(userId);
            if (frontMenuIds.size() > 0) {
                List<FrontMenuTable> menus = frontMenuTableService.listByIds(frontMenuIds);
                String menuPerms = menus.stream().map(m -> m.getPerms()).collect(Collectors.joining(","));
                authority = authority.concat(menuPerms);
            }

            // 用户限权信息缓存一个小时
            redisUtil.set("GrantedAuthority:" + userId, authority, 60 * 60);
        }
        return authority;
    }

    @Override
    public void clearUserAuthorityInfo(long userId) {
        redisUtil.del("GrantedAuthority:" + userId);
    }

    @Override
    public void clearUserAuthorityInfoByRoleId(long roleId) {

        List<UserInfo> userInfos = this.list(new QueryWrapper<UserInfo>()
                .inSql("user_id", "select user_id from user_role_table where role_id = " + roleId));

        userInfos.forEach(u -> {
            this.clearUserAuthorityInfo(u.getUserId());
        });
    }

    @Override
    public void clearUserAuthorityInfoByMenuId(long menuId) {

        List<UserInfo> userInfos = userInfoMapper.listByMenuId(menuId);

        userInfos.forEach(u -> {
            this.clearUserAuthorityInfo(u.getUserId());
        });
    }

    @Override
    public int usernameNum(String username) {

        return userInfoService.count(new QueryWrapper<UserInfo>().eq("username", username));
    }
}
