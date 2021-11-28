package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class WordInfo implements Serializable {
    private Long wordId;
    private String wordNameOrignal;
    private String wordNameTranslate;
    private Integer bookNumber;
    private String bookNameOrignal;
    private String lessonNameOrignal;
}
