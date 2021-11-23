package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.entity.LessonTable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-20
 */

@Repository
public interface LessonTableMapper extends BaseMapper<LessonTable> {

    List<Long> getSentenceIdsByLessonId(long lessonId);
}
