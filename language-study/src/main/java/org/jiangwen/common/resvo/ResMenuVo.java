package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * {
 * 					name: 'SysUser',
 * 					title: '用户管理',
 * 					icon: 'el-icon-s-custom',
 * 					path: '/sys/users',
 * 					component: 'sys/User',
 * 					children: []
 *                                },
 */
@Data
public class ResMenuVo implements Serializable {

    private Long menuId;
    private String onlyCode;
    private String title;
    private String icon;
    private String path;
    private String component;
    private List<ResMenuVo> children = new ArrayList<>();

}
