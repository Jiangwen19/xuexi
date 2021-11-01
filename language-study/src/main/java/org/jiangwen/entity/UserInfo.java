package org.jiangwen.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
@TableName(value = "user_info")
public class UserInfo extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Long userId;

    @NotBlank(message = "用户名不能为空")
    private String username;

    private String password;

    private String authority;

    private String passwordHistory;

    private String description;

    private String picture;

    @NotBlank(message = "邮箱不能为空")
    @Email(message = "邮箱格式不正确")
    private String email;

    private String mobile;

    private Integer statu;

    private LocalDateTime lastLogin;

    @TableField(exist = false)
    private List<RoleTable> roles = new ArrayList<>();


}
