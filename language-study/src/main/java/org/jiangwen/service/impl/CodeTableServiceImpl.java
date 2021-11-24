package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.CodeTable;
import org.jiangwen.mapper.CodeTableMapper;
import org.jiangwen.service.CodeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Service
public class CodeTableServiceImpl extends ServiceImpl<CodeTableMapper, CodeTable> implements CodeTableService {

    @Autowired
    CodeTableMapper codeTableMapper;

    @Override
    public List<CodeTable> codeNoUnique(CodeTable codeTable) {
        return codeTableMapper.selectCodeExcludeOwn(codeTable.getCodeId(), codeTable.getCodeNo());
    }
}
