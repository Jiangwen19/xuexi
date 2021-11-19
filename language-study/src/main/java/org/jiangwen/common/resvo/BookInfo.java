package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class BookInfo implements Serializable {
    private Long bookId;
    private String bookNameOrignal;
    private Integer bookNumber;
}
