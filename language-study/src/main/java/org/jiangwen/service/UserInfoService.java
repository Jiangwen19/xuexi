package org.jiangwen.service;

import org.jiangwen.entity.UserInfo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-01
 */
public interface UserInfoService extends IService<UserInfo> {
    UserInfo getByUsername(String username);
}
