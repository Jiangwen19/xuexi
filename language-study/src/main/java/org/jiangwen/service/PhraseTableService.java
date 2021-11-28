package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.common.resvo.PhraseInfo;
import org.jiangwen.entity.PhraseTable;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
public interface PhraseTableService extends IService<PhraseTable> {

    List<PhraseTable> getPhraseBySentenceSeq(Long sentenceSeq);

    Long addPhrase(PhraseTable phraseTable, String name);

    List<PhraseInfo> getAllPhraseInfo();

    List<PhraseInfo> searchByBookAndLe(Integer bookNum, String lessonName);

    List<PhraseInfo> searchByBookNum(Integer bookNum);
}
