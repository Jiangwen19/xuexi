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
@TableName(value = "sentence_grammer_table")
public class SentenceGrammerTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_grammer_id", type = IdType.AUTO)
    private Long sentenceGrammerId;

    private Long grammerId;

    private Long sentenceSeq;


}
