package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-01
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SentenceTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long sentenceSeq;

    private Long bookId;

    private Long lessonId;

    private Long lineNo;

    private String sentenceType;

    private String sentenceNameTranslate;

    private String sentenceNameOrignal;

    private String description;


}
