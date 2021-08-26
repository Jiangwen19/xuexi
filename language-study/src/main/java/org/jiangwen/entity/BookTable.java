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
public class BookTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long bookId;

    private String bookName;

    private String description;


}
