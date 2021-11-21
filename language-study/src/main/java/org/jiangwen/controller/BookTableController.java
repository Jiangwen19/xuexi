package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.BookTable;
import org.jiangwen.entity.LessonTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Comparator;
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

    @GetMapping("/info/{bookId}")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse bookInfo(@PathVariable(name = "bookId") Long bookId) {
        return ApiRestResponse.success(bookTableService.getById(bookId));
    }

    @GetMapping("/list/{str}")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse list(@PathVariable("str") String str) {

        List<BookTable> books = bookTableService.list(new QueryWrapper<BookTable>().like("book_name_orignal", str).orderByAsc("book_number"));
        return ApiRestResponse.success(books);
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse lists() {

        Page<BookTable> pageData = bookTableService.page(getPage());
        pageData.getRecords().sort(Comparator.comparing(BookTable::getBookNumber));
        return ApiRestResponse.success(pageData);
    }

    @GetMapping("/lists")
    @PreAuthorize("hasAuthority('book:list')")

    public ApiRestResponse listAll() {
        List<BookTable> books = bookTableService.list(new QueryWrapper<BookTable>().orderByAsc("book_number"));
        return ApiRestResponse.success(books);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse save(@Validated @RequestBody BookTable bookTable, Principal principal) {

        int count = bookTableService.count(new QueryWrapper<BookTable>().eq("book_number", bookTable.getBookNumber()));
        if (count > 0) {
            return ApiRestResponse.error("该编号已经存在");
        }

        bookTable.setCreater(principal.getName());
        bookTable.setCreateTime(LocalDateTime.now());
        bookTableService.save(bookTable);
        return ApiRestResponse.success(bookTable);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse update(@Validated @RequestBody BookTable bookTable, Principal principal) {

        BookTable book = bookTableService.getById(bookTable.getBookId());
        int count = bookTableService.uniqueBookNum(bookTable);

        if (count > 1 || (count == 1 && (!bookTable.getBookNumber().equals(book.getBookNumber())))) {
            return ApiRestResponse.error("该书编号已存在");
        }
        bookTable.setUpdater(principal.getName());
        bookTable.setUpdateTime(LocalDateTime.now());
        bookTableService.updateById(bookTable);

        return ApiRestResponse.success(bookTable);
    }

    @PostMapping("/delete/{bookId}")
    @PreAuthorize("hasAuthority('book:list')")
    public ApiRestResponse delete(@PathVariable("bookId") Long bookId) {
        LessonTable lessonTable = lessonTableService.getById(bookId);
        // 判断菜单是否有课程
        int count = lessonTableService.count(new QueryWrapper<LessonTable>().eq("book_id", bookId));
        if (count > 0) {
            return ApiRestResponse.error("该菜单存在课程，请先删除课程");
        }

        bookTableService.removeById(bookId);
        return ApiRestResponse.success(lessonTable);
    }

}
