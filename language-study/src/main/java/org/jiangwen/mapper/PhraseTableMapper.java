package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.common.resvo.PhraseInfo;
import org.jiangwen.entity.PhraseTable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */

@Repository
public interface PhraseTableMapper extends BaseMapper<PhraseTable> {

    List<PhraseTable> getPhraseBySentenceSeq(Long sentenceSeq);

    List<PhraseInfo> getAllPhraseInfo();

    List<PhraseInfo> searchByBookAndLe(Integer bookNum, String lessonName);

    List<PhraseInfo> searchByBookNum(Integer bookNum);
}
