package org.jiangwen.service.impl;

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
 * @since 2021-09-27
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {

}
