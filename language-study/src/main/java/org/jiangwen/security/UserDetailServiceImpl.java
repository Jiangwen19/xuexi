package org.jiangwen.security;

import org.jiangwen.entity.UserInfo;
import org.jiangwen.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    UserInfoService userInfoService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserInfo userInfo = userInfoService.getByUsername(username);
        if(userInfo==null){
            throw new UsernameNotFoundException("用户名或密码不存在");
        }
        return new AccountUser(userInfo.getUserId(), userInfo.getUsername(), userInfo.getPassword(), getUserAuthority(userInfo.getUserId()));
    }

    /**
     * 获取用户权限信息（角色、菜单权限）
     * @param userId
     * @return
     */
    public List<GrantedAuthority> getUserAuthority(long userId){
        return null;
    }
}
