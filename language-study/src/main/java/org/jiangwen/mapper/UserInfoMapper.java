package org.jiangwen.mapper;

import org.jiangwen.entity.UserInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */

@Repository
public interface UserInfoMapper extends BaseMapper<UserInfo> {

    List<Long> getNavMenuIds(Long userId);
}
