package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SentenceTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_seq", type = IdType.AUTO)
    private Long sentenceSeq;

    private Long lessonId;

    private Long lineNo;

    private String sentenceType;

    private String sentenceNameTranslate;

    private String sentenceNameOrignal;

    private String description;


}
