package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.GrammarInfo;
import org.jiangwen.entity.GrammerTable;
import org.jiangwen.entity.SentenceGrammerTable;
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
@RequestMapping("/grammer")
public class GrammerTableController extends BaseController {

    @GetMapping("/GrammarInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('grammar:list')")
    public ApiRestResponse getGrammar(@PathVariable(name = "sentenceSeq") Long sentenceSeq) {

        List<GrammerTable> grammerTableList = grammerTableService.getGrammarBySentenceSeq(sentenceSeq);
        return ApiRestResponse.success(grammerTableList);
    }

    @PostMapping("/addGrammarInSentence/{sentenceSeq}")
    @PreAuthorize("hasAuthority('grammar:add')")
    public ApiRestResponse list(@PathVariable("sentenceSeq") Long sentenceSeq, @Validated @RequestBody GrammerTable grammerTable, Principal principal) {

        Long grammarId = grammerTableService.addGrammar(grammerTable, principal.getName());

        SentenceGrammerTable sentenceGrammerTable = new SentenceGrammerTable();
        sentenceGrammerTable.setGrammerId(grammarId);
        sentenceGrammerTable.setSentenceSeq(sentenceSeq);

        sentenceGrammerTableService.save(sentenceGrammerTable);

        return ApiRestResponse.success(grammarId);
    }

    @Transactional
    @PostMapping("/delete/{sentenceSeq}")
    @PreAuthorize("hasAuthority('grammar:delete')")
    public ApiRestResponse delete(@PathVariable("sentenceSeq") Long sentenceSeq, @RequestBody Long grammarId) {

        Map<String, Object> map = new HashMap<>() {
            {
                put("sentence_seq", sentenceSeq);
                put("grammer_id", grammarId);
            }
        };

        // 删除句子文法中间关联表
        sentenceGrammerTableService.remove(new QueryWrapper<SentenceGrammerTable>().allEq(map));
        return ApiRestResponse.success();
    }


    @GetMapping("/list")
    @PreAuthorize("hasAuthority('grammar:list')")
    public ApiRestResponse grammarList() {
        List<GrammarInfo> grammars = grammerTableService.getAllGrammarInfo();
        return ApiRestResponse.success(grammars);
    }

    @GetMapping("/info/{grammarId}")
    @PreAuthorize("hasAuthority('grammar:list')")
    public ApiRestResponse grammarInfo(@PathVariable(name = "grammarId") Long grammarId) {
        return ApiRestResponse.success(grammerTableService.getById(grammarId));
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('grammar:update')")
    public ApiRestResponse update(@Validated @RequestBody GrammerTable grammerTable, Principal principal) {

        grammerTable.setUpdater(principal.getName());
        grammerTable.setUpdateTime(LocalDateTime.now());
        grammerTableService.updateById(grammerTable);

        return ApiRestResponse.success(grammerTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('grammar:delete')")
    public ApiRestResponse wordDelete(@RequestBody Long[] ids) {

        // 删除中间表
        sentenceGrammerTableService.remove(new QueryWrapper<SentenceGrammerTable>().in("grammer_id", ids));

        grammerTableService.removeByIds(Arrays.asList(ids));

        return ApiRestResponse.success();
    }

    @PostMapping("/search")
    @PreAuthorize("hasAuthority('grammar:list')")
    public ApiRestResponse searchGrammars(@RequestBody GrammarInfo grammarInfo) {

        List<GrammarInfo> grammars;

        Integer bookNum = grammarInfo.getBookNumber();
        String lessonName = grammarInfo.getLessonNameOrignal();

        if (bookNum != null && StringUtils.isNotBlank(lessonName)) {
            grammars = grammerTableService.searchByTwo(bookNum, lessonName);
        } else if (bookNum != null && !StringUtils.isNotBlank(lessonName)) {
            grammars = grammerTableService.searchByBookNum(bookNum);
        } else {
            return ApiRestResponse.error("没有找到匹配的查询结果");
        }

        return ApiRestResponse.success(grammars);
    }
}
