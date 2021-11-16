package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.BookTable;
import org.jiangwen.service.BookTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-28
 */
@RestController
@RequestMapping("/book")
public class BookTableController extends BaseController {

    @Autowired
    BookTableService bookTableService;

    @GetMapping("/info/{bookId}")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse bookInfo(@PathVariable(name = "bookId") Long bookId) {
        return ApiRestResponse.success(bookTableService.getById(bookId));
    }

    @GetMapping("/list/{str}")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse list(@PathVariable("str") String str) {

        List<BookTable> books = bookTableService.list(new QueryWrapper<BookTable>().like("book_name_orignal", str));
        return ApiRestResponse.success(books);
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse lists() {

        Page<BookTable> pageData = bookTableService.page(getPage());
        return ApiRestResponse.success(pageData);
    }

    @GetMapping("/lists")
    @PreAuthorize("hasAuthority('book:list')")

    public ApiRestResponse listAll() {
        List<BookTable> books = bookTableService.list();
        return ApiRestResponse.success(books);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse save(@Validated @RequestBody BookTable bookTable, Principal principal) {
        bookTable.setCreater(principal.getName());
        bookTable.setCreateTime(LocalDateTime.now());
        bookTableService.save(bookTable);
        return ApiRestResponse.success(bookTable);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse update(@Validated @RequestBody BookTable bookTable, Principal principal) {
        bookTable.setUpdater(principal.getName());
        bookTable.setUpdateTime(LocalDateTime.now());
        bookTableService.updateById(bookTable);

        return ApiRestResponse.success(bookTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse delete(@RequestBody Long[] ids) {

        bookTableService.removeByIds(Arrays.asList(ids));
        return ApiRestResponse.success();
    }

}
