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
@TableName(value = "word_table")
public class WordTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "word_id", type = IdType.AUTO)
    private Long wordId;

    private String wordNameTranslate;

    private String wordNameOrignal;

    private String wordType;

    private String description;


}
