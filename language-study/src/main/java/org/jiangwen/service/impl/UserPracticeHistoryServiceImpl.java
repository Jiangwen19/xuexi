package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.common.resvo.History;
import org.jiangwen.entity.UserPracticeHistory;
import org.jiangwen.mapper.UserPracticeHistoryMapper;
import org.jiangwen.service.UserPracticeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Service
public class UserPracticeHistoryServiceImpl extends ServiceImpl<UserPracticeHistoryMapper, UserPracticeHistory> implements UserPracticeHistoryService {

    @Autowired
    UserPracticeHistoryMapper userPracticeHistoryMapper;

    @Override
    public List<History> getFavouritesByUserId(Long userId) {
        return userPracticeHistoryMapper.getFavouritesByUserId(userId);
    }

    @Override
    public List<History> getMistakensByUserId(Long userId) {
        return userPracticeHistoryMapper.getMistakensByUserId(userId);
    }
}
