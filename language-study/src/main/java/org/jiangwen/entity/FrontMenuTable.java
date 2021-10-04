package org.jiangwen.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

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
@TableName(value = "front_menu_table")
public class FrontMenuTable extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "front_menu_id", type = IdType.AUTO)
    private Long frontMenuId;

    @NotNull(message = "上级菜单不能为空")
    private Long parentId;

    @NotBlank(message = "菜单名称不能为空")
    private String menuName;

    private String path;

    @NotBlank(message = "菜单授权码不能为空")
    private String perms;

    private String component;

    @NotNull(message = "菜单类型不能为空")
    private Integer menuType;

    private String icon;

    private Integer ordernum;

    private Integer statu;

    @TableField(exist = false)
    private List<FrontMenuTable> children = new ArrayList<>();


}
