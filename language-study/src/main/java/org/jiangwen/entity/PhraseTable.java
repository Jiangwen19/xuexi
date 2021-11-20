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
 * @since 2021-11-21
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class PhraseTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "phrase_id", type = IdType.AUTO)
    private Long phraseId;

    private String phraseType;

    private String phraseNameTranslate;

    private String phraseNameOrignal;

    private String description;

    private Long bookId;


}
