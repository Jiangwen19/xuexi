package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.GrammerTable;
import org.jiangwen.entity.SentenceGrammerTable;
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
}
