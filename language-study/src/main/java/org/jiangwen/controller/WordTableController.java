package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.WordInfo;
import org.jiangwen.entity.SentenceWordTable;
import org.jiangwen.entity.WordTable;
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
@RequestMapping("/word")
public class WordTableController extends BaseController {

    @GetMapping("/wordInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('word:list')")
    public ApiRestResponse getWord(@PathVariable(name = "sentenceSeq") Long sentenceSeq) {

        List<WordTable> wordList = wordTableService.getWordBySentenceSeq(sentenceSeq);
        return ApiRestResponse.success(wordList);
    }

    @PostMapping("/addWordInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('word:add')")
    public ApiRestResponse list(@PathVariable("sentenceSeq") Long sentenceSeq, @Validated @RequestBody WordTable wordTable, Principal principal) {

        Long wordId = wordTableService.addWord(wordTable, principal.getName());

        SentenceWordTable sentenceWordTable = new SentenceWordTable();
        sentenceWordTable.setWordId(wordId);
        sentenceWordTable.setSentenceSeq(sentenceSeq);

        sentenceWordTableService.save(sentenceWordTable);

        return ApiRestResponse.success(wordId);
    }

    @Transactional
    @PostMapping("/delete/{sentenceSeq}")
    @PreAuthorize("hasAuthority('word:delete')")
    public ApiRestResponse delete(@PathVariable("sentenceSeq") Long sentenceSeq, @RequestBody Long wordId) {

        Map<String, Object> map = new HashMap<>() {
            {
                put("sentence_seq", sentenceSeq);
                put("word_id", wordId);
            }
        };

        // 删除句子单词中间关联表
        sentenceWordTableService.remove(new QueryWrapper<SentenceWordTable>().allEq(map));
        return ApiRestResponse.success();
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('word:list')")
    public ApiRestResponse wordList() {
        List<WordInfo> words = wordTableService.getAllWordInfo();
        return ApiRestResponse.success(words);
    }

    @GetMapping("/info/{wordId}")
    @PreAuthorize("hasAuthority('word:list')")
    public ApiRestResponse wordInfo(@PathVariable(name = "wordId") Long wordId) {
        return ApiRestResponse.success(wordTableService.getById(wordId));
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('word:update')")
    public ApiRestResponse update(@Validated @RequestBody WordTable wordTable, Principal principal) {

        wordTable.setUpdater(principal.getName());
        wordTable.setUpdateTime(LocalDateTime.now());
        wordTableService.updateById(wordTable);

        return ApiRestResponse.success(wordTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('word:delete')")
    public ApiRestResponse wordDelete(@RequestBody Long[] ids) {

        // 删除中间表
        sentenceWordTableService.remove(new QueryWrapper<SentenceWordTable>().in("word_id", ids));

        wordTableService.removeByIds(Arrays.asList(ids));

        return ApiRestResponse.success();
    }

    @PostMapping("/search")
    @PreAuthorize("hasAuthority('word:list')")
    public ApiRestResponse searchWords(@RequestBody WordInfo wordInfo) {

        List<WordInfo> words;

        Integer bookNum = wordInfo.getBookNumber();
        String lessonName = wordInfo.getLessonNameOrignal();

        if (bookNum != null && StringUtils.isNotBlank(lessonName)) {
            words = wordTableService.searchBytwo(bookNum, lessonName);
        } else if (bookNum != null && !StringUtils.isNotBlank(lessonName)) {
            words = wordTableService.searchByBookNum(bookNum);
        } else {
            return ApiRestResponse.error("没有找到匹配的查询结果");
        }

        return ApiRestResponse.success(words);
    }
}
