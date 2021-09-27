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
public class SentenceWordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long wordId;

    private Long sentenceSeq;


}
