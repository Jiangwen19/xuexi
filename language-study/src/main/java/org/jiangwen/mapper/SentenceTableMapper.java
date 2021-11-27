package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.common.resvo.SentenceInfoVo;
import org.jiangwen.entity.SentenceTable;
import org.springframework.stereotype.Repository;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */

@Repository
public interface SentenceTableMapper extends BaseMapper<SentenceTable> {

    SentenceInfoVo getSentenceInfo(Long sentenceSeq);
}
