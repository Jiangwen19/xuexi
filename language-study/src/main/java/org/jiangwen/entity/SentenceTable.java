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
@TableName(value = "sentence_table")
public class SentenceTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_seq", type = IdType.AUTO)
    private Long sentenceSeq;

    private Long bookId;

    private Long lessonId;

    private Long lineNo;

    private String sentenceType;

    private String sentenceNameTranslate;

    private String sentenceNameOrignal;

    private String description;


}
