package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.entity.CodeTable;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
public interface CodeTableService extends IService<CodeTable> {

    List<CodeTable> codeNoUnique(CodeTable codeTable);
}
