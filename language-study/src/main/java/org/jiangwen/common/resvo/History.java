package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class History implements Serializable {
    private Long historyId;
    private Long sentenceSeq;
    private Long mistakeCount;
    private String lessonNameOrignal;
    private Integer bookNumber;
    private String bookNameOrignal;
}
