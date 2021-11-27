package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.PhraseTable;
import org.jiangwen.mapper.PhraseTableMapper;
import org.jiangwen.service.PhraseTableService;
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
public class PhraseTableServiceImpl extends ServiceImpl<PhraseTableMapper, PhraseTable> implements PhraseTableService {

    @Autowired
    PhraseTableMapper phraseTableMapper;

    @Override
    public List<PhraseTable> getPhraseBySentenceSeq(Long sentenceSeq) {
        return phraseTableMapper.getPhraseBySentenceSeq(sentenceSeq);

    }

    @Override
    public Long addPhrase(PhraseTable phraseTable, String name) {

        phraseTable.setCreater(name);
        phraseTable.setCreateTime(LocalDateTime.now());

        phraseTableMapper.insert(phraseTable);
        return phraseTable.getPhraseId();
    }
}
