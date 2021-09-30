package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.mapper.UserInfoMapper;
import org.jiangwen.service.UserInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-01
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {
    @Override
    public UserInfo getByUsername(String username) {
        return getOne(new QueryWrapper<UserInfo>().eq("username",username));
    }
}
