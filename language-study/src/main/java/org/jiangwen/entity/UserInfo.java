package org.jiangwen.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * <p>
 * 
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-09-27
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class UserInfo extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long userId;

    private String username;

    private String password;

    private String authority;

    private String passwordHistory;

    private String description;

    private String picture;

    private String email;

    private String mobile;

    private Integer statu;

    private LocalDateTime lastLogin;


}
