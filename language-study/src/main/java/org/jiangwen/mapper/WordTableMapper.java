package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.common.resvo.WordInfo;
import org.jiangwen.entity.WordTable;
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
public interface WordTableMapper extends BaseMapper<WordTable> {

    List<WordTable> getWordBySentenceSeq(Long sentenceSeq);

    List<WordInfo> getAllWordInfo();

    List<WordInfo> searchBytwo(Integer bookNumber, String lessonNameOrignal);

    List<WordInfo> searchByBookNum(Integer bookNumber);
}
