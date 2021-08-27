package org.jiangwen.entity;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class BaseEntity implements Serializable {

    private LocalDateTime create_time;

    private LocalDateTime update_time;
}
