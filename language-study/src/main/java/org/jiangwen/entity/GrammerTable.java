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
public class GrammerTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "grammer_id", type = IdType.AUTO)
    private Long grammerId;

    @NotBlank(message = "文法标题不能为空")
    private String grammerTitle;

    @NotBlank(message = "文法内容不能为空")
    private String grammer;

    private String description;


}
