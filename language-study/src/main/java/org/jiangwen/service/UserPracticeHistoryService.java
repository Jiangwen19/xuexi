package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.common.resvo.History;
import org.jiangwen.entity.UserPracticeHistory;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
public interface UserPracticeHistoryService extends IService<UserPracticeHistory> {

    List<History> getFavouritesByUserId(Long userId);

    List<History> getMistakensByUserId(Long userId);
}
