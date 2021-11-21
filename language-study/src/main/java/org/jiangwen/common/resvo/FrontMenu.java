package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class FrontMenu implements Serializable {
    private Long menuId;
    private Integer level;
    private String key;
    private String onlyCode;
    private String title;
    private String icon;
    private String path;
    private Integer menuType;
    private Integer orderNum;
    private Integer state;
    private String component;
    private List<FrontMenu> children = new ArrayList<>();

}
