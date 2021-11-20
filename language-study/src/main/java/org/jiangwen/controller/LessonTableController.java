package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.BookInfo;
import org.jiangwen.entity.BookTable;
import org.jiangwen.entity.LessonTable;
import org.jiangwen.service.BookTableService;
import org.jiangwen.service.LessonTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-20
 */
@RestController
@RequestMapping("/lesson")
public class LessonTableController extends BaseController {

    @Autowired
    BookTableService bookTableService;

    @Autowired
    LessonTableService lessonTableService;

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

    @GetMapping("/list/{bookId}")
    @PreAuthorize("hasAuthority('lesson:list')")
    public ApiRestResponse list(@PathVariable("bookId") Long bookId) {

        List<LessonTable> lessons = lessonTableService.list(new QueryWrapper<LessonTable>()
                .eq("book_id", bookId)
                .orderByAsc("lesson_number"));

        return ApiRestResponse.success(lessons);
    }

    @PostMapping("/searchList/{str}")
    @PreAuthorize("hasAuthority('lesson:list')")
    public ApiRestResponse list(@PathVariable("str") String str, @RequestBody Long bookId) {

        List<LessonTable> lessons = lessonTableService.list(new QueryWrapper<LessonTable>()
                .eq("book_id", bookId)
                .like("lesson_name_orignal", str)
                .orderByAsc("lesson_number"));
        return ApiRestResponse.success(lessons);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('lesson:save')")
    public ApiRestResponse save(@Validated @RequestBody LessonTable lessonTable, Principal principal) {

        int count = bookTableService.count(new QueryWrapper<BookTable>().eq("book_id", lessonTable.getBookId()));
        if (count == 0) {
            return ApiRestResponse.error("此书不存在");
        }
        if (lessonTableService.hasLessonNumber(lessonTable.getBookId(), lessonTable.getLessonNumber()) > 0) {
            return ApiRestResponse.error("该课程编号在本书中已存在");
        }

        lessonTable.setCreater(principal.getName());
        lessonTable.setCreateTime(LocalDateTime.now());
        lessonTableService.save(lessonTable);

        return ApiRestResponse.success(lessonTable);
    }

    @GetMapping("/info/{lessonId}")
    @PreAuthorize("hasAuthority('lesson:list')")
    public ApiRestResponse bookInfo(@PathVariable(name = "lessonId") Long lessonId) {
        return ApiRestResponse.success(lessonTableService.getById(lessonId));
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('lesson:update')")
    public ApiRestResponse update(@Validated @RequestBody LessonTable lessonTable, Principal principal) {

        LessonTable lesson = lessonTableService.getById(lessonTable.getLessonId());
        int count = lessonTableService.hasLessonNumber(lesson.getBookId(), lessonTable.getLessonNumber());

        if (count > 1 || (count == 1 && (lessonTable.getLessonNumber() != lesson.getLessonNumber()))) {
            return ApiRestResponse.error("该课程编号在本书中已存在");
        }

        lessonTable.setBookId(lesson.getBookId());
        lessonTable.setUpdater(principal.getName());
        lessonTable.setUpdateTime(LocalDateTime.now());
        lessonTableService.updateById(lessonTable);

        return ApiRestResponse.success(lessonTable);
    }

}
