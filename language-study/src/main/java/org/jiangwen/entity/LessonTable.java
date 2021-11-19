package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * <p>
 *
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-28
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class LessonTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "lesson_id", type = IdType.AUTO)
    private Integer lessonId;

    @NotNull(message = "图书ID不能为空")
    private Long bookId;

    private String lessonNameTranslate;

    @NotBlank(message = "课文名不能为空")
    private String lessonNameOrignal;

    private String description;

    @NotNull(message = "课文编号不能为空")
    private Integer lessonNumber;


}
