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
@TableName(value = "sentence_phrase_table")
public class SentencePhraseTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_phrase_id", type = IdType.AUTO)
    private Long sentencePhraseId;

    private Long phraseId;

    private Long sentenceSeq;


}
