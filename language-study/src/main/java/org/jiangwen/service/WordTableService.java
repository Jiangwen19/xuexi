package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.entity.WordTable;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
public interface WordTableService extends IService<WordTable> {

    List<WordTable> getWordBySentenceSeq(Long sentenceSeq);

    Long addWord(WordTable wordTable, String name);
}
