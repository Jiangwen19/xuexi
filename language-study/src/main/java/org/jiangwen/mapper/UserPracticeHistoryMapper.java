package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.common.resvo.History;
import org.jiangwen.entity.UserPracticeHistory;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Repository
public interface UserPracticeHistoryMapper extends BaseMapper<UserPracticeHistory> {

    List<History> getFavouritesByUserId(Long userId);

    List<History> getMistakensByUserId(Long userId);
}
