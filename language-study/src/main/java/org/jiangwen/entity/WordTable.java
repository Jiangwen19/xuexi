package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

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
public class WordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "word_id", type = IdType.AUTO)
    private Long wordId;

    private String wordNameTranslate;

    @NotBlank(message = "单词不能为空")
    private String wordNameOrignal;

    private String wordType;

    private String description;


}
