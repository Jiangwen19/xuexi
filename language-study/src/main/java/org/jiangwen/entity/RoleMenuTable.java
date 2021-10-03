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
@TableName(value = "role_menu_table")
public class RoleMenuTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "role_menu_table", type = IdType.AUTO)
    private Long roleMenuTable;

    private Long roleId;

    private Long frontMenuId;


}
