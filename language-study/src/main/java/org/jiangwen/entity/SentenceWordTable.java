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
@TableName(value = "sentence_word_table")
public class SentenceWordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_word_id", type = IdType.AUTO)
    private Long sentenceWordId;

    private Long wordId;

    private Long sentenceSeq;


}
