package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.BookTable;
import org.jiangwen.mapper.BookTableMapper;
import org.jiangwen.service.BookTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-28
 */
@Service
public class BookTableServiceImpl extends ServiceImpl<BookTableMapper, BookTable> implements BookTableService {

    @Autowired
    BookTableService bookTableService;

    @Override
    public int uniqueBookNum(BookTable bookTable) {
        return bookTableService.count(new QueryWrapper<BookTable>().eq("book_number", bookTable.getBookNumber()));
    }
}
