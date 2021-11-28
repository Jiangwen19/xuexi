package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class GrammarInfo implements Serializable {
    private Long grammerId;
    private String grammerTitle;
    private String grammer;
    private Integer bookNumber;
    private String bookNameOrignal;
    private String lessonNameOrignal;
}
