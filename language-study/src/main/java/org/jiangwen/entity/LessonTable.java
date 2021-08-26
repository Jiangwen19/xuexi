package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-08-25
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class LessonTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long bookId;

    private Long lessonId;

    private String lessonNameOrignal;

    private String lessonNameTranslate;

    private String description;


}
