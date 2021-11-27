package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.dto.LessonLinkSentenceDto;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.SentenceInfoVo;
import org.jiangwen.entity.CodeTable;
import org.jiangwen.entity.SentenceTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
@RestController
@RequestMapping("/sentence")
public class SentenceTableController extends BaseController {

    @PostMapping("/match-code")
    @PreAuthorize("hasAuthority('sentence:list')")
    public ApiRestResponse getSentencesMatchCode(@Validated @RequestBody LessonLinkSentenceDto lessonLinkSentenceDto) {

        List<SentenceTable> list = sentenceTableService.sentenceListMatchCode(lessonLinkSentenceDto.getLessonId(), lessonLinkSentenceDto.getSentenceType());

        return list.size() == 0 ? ApiRestResponse.error("该课程不存在该类型句子") : ApiRestResponse.success(list);
    }

    @GetMapping("/code-list")
    @PreAuthorize("hasAuthority('sentence:codelist')")
    public ApiRestResponse codeList() {
        List<CodeTable> codes = codeTableService.list(new QueryWrapper<CodeTable>().orderByAsc("code_id"));
        return ApiRestResponse.success(codes);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('sentence:sava')")
    public ApiRestResponse sentenceCave(@Validated @RequestBody SentenceTable sentenceTable, Principal principal) {

        int count = codeTableService.count(new QueryWrapper<CodeTable>().eq("code_no", sentenceTable.getSentenceType()));
        if (count == 0) {
            return ApiRestResponse.error("该Code不存在");
        }

        sentenceTable.setCreater(principal.getName());
        sentenceTable.setCreateTime(LocalDateTime.now());
        sentenceTableService.save(sentenceTable);

        return ApiRestResponse.success(sentenceTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('sentence:delete')")
    public ApiRestResponse deleteSentence(@RequestBody Long[] sentenceIds) {

//        List<Long> msg = sentenceTableService.hasItemInDb(sentenceIds);
//        if (msg.size() > 0) {
//            return ApiRestResponse.error("存在不存在的删除项目");
//        }

        sentenceTableService.deleteMediumTable(sentenceIds);
        sentenceTableService.removeByIds(Arrays.asList(sentenceIds));

        return ApiRestResponse.success();
    }

    @GetMapping("/detail/{sentenceSeq}")
    @PreAuthorize("hasAuthority('sentence:list')")
    public ApiRestResponse SentenceDetail(@PathVariable(name = "sentenceSeq") Long sentenceSeq) {

        SentenceInfoVo sentenceInfoVo = sentenceTableService.getSentenceDetail(sentenceSeq);
        return ApiRestResponse.success(new ArrayList<>(Arrays.asList(sentenceInfoVo)));
    }

}
