package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.entity.UserInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-01
 */

@Repository
public interface UserInfoMapper extends BaseMapper<UserInfo> {

    List<Long> getNavMenuIds(Long userId);
}
