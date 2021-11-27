package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.entity.GrammerTable;
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
public interface GrammerTableMapper extends BaseMapper<GrammerTable> {

    List<GrammerTable> getGrammarBySentenceSeq(Long sentenceSeq);
}
