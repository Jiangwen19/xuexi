package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.CodeTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@RestController
@RequestMapping("/code")
public class CodeTableController extends BaseController {

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('code:list')")
    public ApiRestResponse codeList() {
        List<CodeTable> codes = codeTableService.list(new QueryWrapper<CodeTable>().orderByAsc("code_id"));
        return ApiRestResponse.success(codes);
    }

    @GetMapping("/info/{codeId}")
    @PreAuthorize("hasAuthority('code:list')")
    public ApiRestResponse bookInfo(@PathVariable(name = "codeId") Long codeId) {
        return ApiRestResponse.success(codeTableService.getById(codeId));
    }


    @PostMapping("/save")
    @PreAuthorize("hasAuthority('code:save')")
    public ApiRestResponse codeCave(@Validated @RequestBody CodeTable codeTable, Principal principal) {

        int count = codeTableService.count(new QueryWrapper<CodeTable>().eq("code_no", codeTable.getCodeNo()));
        if (count > 0) {
            return ApiRestResponse.error("该Code编码已经存在");
        }

        codeTable.setCreater(principal.getName());
        codeTable.setCreateTime(LocalDateTime.now());
        codeTableService.save(codeTable);

        return ApiRestResponse.success(codeTable);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('code:update')")
    public ApiRestResponse updateCave(@Validated @RequestBody CodeTable codeTable, Principal principal) {

        List<CodeTable> codeList = codeTableService.codeNoUnique(codeTable);
        if (codeList.size() > 0) {
            return ApiRestResponse.error("该Code编码已经存在");
        }

        codeTable.setUpdater(principal.getName());
        codeTable.setUpdateTime(LocalDateTime.now());

        codeTableService.updateById(codeTable);

        return ApiRestResponse.success(codeTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('code:delete')")
    public ApiRestResponse delete(@RequestBody Long id) {

        CodeTable codeTable = codeTableService.getById(id);
        if (codeTable == null) {
            return ApiRestResponse.error("该条数据不存在");
        }
        codeTableService.removeById(id);
        return ApiRestResponse.success();
    }
}
