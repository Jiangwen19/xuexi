package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-08-27
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class FavouritesTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long favouritesId;

    private Long userId;

    private String recordId;


}
