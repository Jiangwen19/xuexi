package org.jiangwen.common.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
public class LessonLinkSentenceDto implements Serializable {

    @NotNull(message = "课程编号不能为空")
    private Long lessonId;

    @NotBlank(message = "句子类型不能为空")
    private String sentenceType;
}
