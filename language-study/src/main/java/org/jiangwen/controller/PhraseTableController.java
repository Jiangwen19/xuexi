package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.PhraseInfo;
import org.jiangwen.entity.PhraseTable;
import org.jiangwen.entity.SentencePhraseTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
@RestController
@RequestMapping("/phrase")
public class PhraseTableController extends BaseController {

    @GetMapping("/phraseInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('phrase:list')")
    public ApiRestResponse getPhrase(@PathVariable(name = "sentenceSeq") Long sentenceSeq) {

        List<PhraseTable> phraseList = phraseTableService.getPhraseBySentenceSeq(sentenceSeq);
        return ApiRestResponse.success(phraseList);
    }

    @PostMapping("/addPhraseInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('phrase:add')")
    public ApiRestResponse list(@PathVariable("sentenceSeq") Long sentenceSeq, @Validated @RequestBody PhraseTable phraseTable, Principal principal) {

        Long phraseId = phraseTableService.addPhrase(phraseTable, principal.getName());

        SentencePhraseTable sentencePhraseTable = new SentencePhraseTable();
        sentencePhraseTable.setPhraseId(phraseId);
        sentencePhraseTable.setSentenceSeq(sentenceSeq);

        sentencePhraseTableService.save(sentencePhraseTable);

        return ApiRestResponse.success(phraseId);
    }

    @Transactional
    @PostMapping("/delete/{sentenceSeq}")
    @PreAuthorize("hasAuthority('phrase:delete')")
    public ApiRestResponse delete(@PathVariable("sentenceSeq") Long sentenceSeq, @RequestBody Long phraseId) {

        Map<String, Object> map = new HashMap<>() {
            {
                put("sentence_seq", sentenceSeq);
                put("phrase_id", phraseId);
            }
        };

        // 删除句子短语中间关联表
        sentencePhraseTableService.remove(new QueryWrapper<SentencePhraseTable>().allEq(map));
        return ApiRestResponse.success();
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('phrase:list')")
    public ApiRestResponse phraseList() {
        List<PhraseInfo> phrases = phraseTableService.getAllPhraseInfo();
        return ApiRestResponse.success(phrases);
    }

    @GetMapping("/info/{phraseId}")
    @PreAuthorize("hasAuthority('phrase:list')")
    public ApiRestResponse phraseInfo(@PathVariable(name = "phraseId") Long phraseId) {
        return ApiRestResponse.success(phraseTableService.getById(phraseId));
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('phrase:update')")
    public ApiRestResponse update(@Validated @RequestBody PhraseTable phraseTable, Principal principal) {

        phraseTable.setUpdater(principal.getName());
        phraseTable.setUpdateTime(LocalDateTime.now());
        phraseTableService.updateById(phraseTable);

        return ApiRestResponse.success(phraseTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('phrase:delete')")
    public ApiRestResponse phraseDelete(@RequestBody Long[] ids) {

        // 删除中间表
        sentencePhraseTableService.remove(new QueryWrapper<SentencePhraseTable>().in("phrase_id", ids));

        phraseTableService.removeByIds(Arrays.asList(ids));

        return ApiRestResponse.success();
    }

    @PostMapping("/search")
    @PreAuthorize("hasAuthority('phrase:list')")
    public ApiRestResponse searchPhrases(@RequestBody PhraseInfo phraseInfo) {

        List<PhraseInfo> phrases;

        Integer bookNum = phraseInfo.getBookNumber();
        String lessonName = phraseInfo.getLessonNameOrignal();

        if (bookNum != null && StringUtils.isNotBlank(lessonName)) {
            phrases = phraseTableService.searchByBookAndLe(bookNum, lessonName);
        } else if (bookNum != null && !StringUtils.isNotBlank(lessonName)) {
            phrases = phraseTableService.searchByBookNum(bookNum);
        } else {
            return ApiRestResponse.error("没有找到匹配的查询结果");
        }

        return ApiRestResponse.success(phrases);
    }
}
