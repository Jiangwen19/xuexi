package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.GrammerTable;
import org.jiangwen.mapper.GrammerTableMapper;
import org.jiangwen.service.GrammerTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
@Service
public class GrammerTableServiceImpl extends ServiceImpl<GrammerTableMapper, GrammerTable> implements GrammerTableService {

    @Autowired
    GrammerTableMapper grammerTableMapper;

    @Override
    public List<GrammerTable> getGrammarBySentenceSeq(Long sentenceSeq) {
        return grammerTableMapper.getGrammarBySentenceSeq(sentenceSeq);
    }

    @Override
    public Long addGrammar(GrammerTable grammerTable, String name) {

        grammerTable.setCreater(name);
        grammerTable.setCreateTime(LocalDateTime.now());

        grammerTableMapper.insert(grammerTable);
        return grammerTable.getGrammerId();
    }
}
