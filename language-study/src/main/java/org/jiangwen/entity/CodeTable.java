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
@TableName(value = "code_table")
public class CodeTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "code_id", type = IdType.AUTO)
    private Long codeId;

    private String codeNo;

    private String codeItem;

    private String description;


}
