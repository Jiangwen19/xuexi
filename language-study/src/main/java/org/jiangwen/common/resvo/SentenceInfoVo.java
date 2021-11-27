package org.jiangwen.common.resvo;

import lombok.Data;

import java.io.Serializable;

@Data
public class SentenceInfoVo implements Serializable {
    private String lessonNameOrignal;
    private Long lineNo;
    private String codeItem;
    private String sentenceNameOrignal;
    private String sentenceNameTranslate;
}
