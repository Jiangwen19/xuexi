package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-01
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class FrontMenuTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long frontMenuId;

    private Long parentId;

    private String menuName;

    private String path;

    private String perms;

    private String component;

    private Integer menuType;

    private String icon;

    private Integer ordernum;

    private Integer statu;


}
