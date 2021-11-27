package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.SentenceWordTable;
import org.jiangwen.entity.WordTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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
}
