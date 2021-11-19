package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.BookInfo;
import org.jiangwen.entity.BookTable;
import org.jiangwen.service.BookTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
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
@RequestMapping("/lesson")
public class LessonTableController extends BaseController {

    @Autowired
    BookTableService bookTableService;

    @GetMapping("/allBookInfo")
    @PreAuthorize("hasAuthority('lesson:list')")

    public ApiRestResponse allBookInfo() {
        List<BookTable> books = bookTableService.list(new QueryWrapper<BookTable>().orderByAsc("book_number"));
        List<BookInfo> bookInfos = new ArrayList<>();
        books.forEach(val -> {
            BookInfo bookInfo = new BookInfo();
            bookInfo.setBookId(val.getBookId());
            bookInfo.setBookNameOrignal(val.getBookNameOrignal());
            bookInfo.setBookNumber(val.getBookNumber());

            bookInfos.add(bookInfo);
        });
        return ApiRestResponse.success(bookInfos);
    }
}
