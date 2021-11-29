package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class PathComponentVo implements Serializable {
    private String path;
    private String component;
    private String title;
}
