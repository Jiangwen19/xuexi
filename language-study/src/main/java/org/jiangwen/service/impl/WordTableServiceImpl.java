package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.common.resvo.WordInfo;
import org.jiangwen.entity.WordTable;
import org.jiangwen.mapper.WordTableMapper;
import org.jiangwen.service.WordTableService;
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
public class WordTableServiceImpl extends ServiceImpl<WordTableMapper, WordTable> implements WordTableService {

    @Autowired
    WordTableMapper wordTableMapper;

    @Override
    public List<WordTable> getWordBySentenceSeq(Long sentenceSeq) {
        return wordTableMapper.getWordBySentenceSeq(sentenceSeq);
    }

    @Override
    public Long addWord(WordTable wordTable, String name) {

        wordTable.setCreater(name);
        wordTable.setCreateTime(LocalDateTime.now());

        wordTableMapper.insert(wordTable);
        return wordTable.getWordId();
    }

    @Override
    public List<WordInfo> getAllWordInfo() {

        return wordTableMapper.getAllWordInfo();
    }

    @Override
    public List<WordInfo> searchBytwo(Integer bookNumber, String lessonNameOrignal) {

        return wordTableMapper.searchBytwo(bookNumber, lessonNameOrignal);
    }

    @Override
    public List<WordInfo> searchByBookNum(Integer bookNumber) {

        return wordTableMapper.searchByBookNum(bookNumber);
    }

}
