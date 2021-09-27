package org.jiangwen.entity;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class BaseEntity implements Serializable {

    private String creater;

    private LocalDateTime createTime;

    private String updater;

    private LocalDateTime updateTime;
}
