package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-08-25
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class CodeTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long codeId;

    private String codeNo;

    private String codeItem;

    private String description;


}
