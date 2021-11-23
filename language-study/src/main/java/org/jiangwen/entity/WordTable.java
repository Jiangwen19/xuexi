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
public class WordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "word_id", type = IdType.AUTO)
    private Long wordId;

    private String wordNameTranslate;

    private String wordNameOrignal;

    private String wordType;

    private String description;


}
