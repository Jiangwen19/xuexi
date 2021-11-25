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
 * @since 2021-11-23
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SentenceTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentence_seq", type = IdType.AUTO)
    private Long sentenceSeq;

    @NotNull(message = "课程编号不能为空")
    private Long lessonId;

    private Long lineNo;

    @NotBlank(message = "句子类型不能为空")
    private String sentenceType;

    private String sentenceNameTranslate;

    @NotBlank(message = "句子内容不能为空")
    private String sentenceNameOrignal;

    private String description;


}
