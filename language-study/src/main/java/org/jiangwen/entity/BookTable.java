package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
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
 * @since 2021-10-28
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName(value = "book_table")
public class BookTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "book_id", type = IdType.AUTO)
    private Long bookId;

    private String bookNameTranslate;

    @NotBlank(message = "书名不能为空不能为空")
    private String bookNameOrignal;

    private String description;

    @NotNull(message = "书本编号不能为空")
    private Integer bookNumber;


}
