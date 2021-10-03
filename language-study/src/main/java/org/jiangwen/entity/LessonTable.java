package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "lesson_table")
public class LessonTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "lesson_id", type = IdType.AUTO)
    private Integer lessonId;

    private Long bookId;

    private String lessonNameTranslate;

    private String lessonNameOrignal;

    private String description;


}
