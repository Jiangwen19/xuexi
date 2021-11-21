package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.entity.BookTable;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-28
 */
public interface BookTableService extends IService<BookTable> {

    int uniqueBookNum(BookTable bookTable);
}
