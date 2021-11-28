package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class PhraseInfo implements Serializable {
    private Long phraseId;
    private String phraseNameOrignal;
    private String phraseNameTranslate;
    private Integer bookNumber;
    private String bookNameOrignal;
    private String lessonNameOrignal;
}
