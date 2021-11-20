package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.LessonTable;
import org.jiangwen.mapper.LessonTableMapper;
import org.jiangwen.service.LessonTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-20
 */
@Service
public class LessonTableServiceImpl extends ServiceImpl<LessonTableMapper, LessonTable> implements LessonTableService {

    @Autowired
    LessonTableService lessonTableService;

    @Override
    public int hasLessonNumber(long bookId, long lessonNumber) {
        Map<String, Object> map = new HashMap<>() {
            {
                put("book_id", bookId);
                put("lesson_number", lessonNumber);
            }
        };
        return lessonTableService.count(new QueryWrapper<LessonTable>().allEq(map));
    }
}
