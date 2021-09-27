package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-09-27
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class WordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long wordId;

    private String wordNameTranslate;

    private String wordNameOrignal;

    private String wordType;

    private String description;


}
