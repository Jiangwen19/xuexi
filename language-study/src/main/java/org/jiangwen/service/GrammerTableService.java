package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.entity.GrammerTable;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
public interface GrammerTableService extends IService<GrammerTable> {

    List<GrammerTable> getGrammarBySentenceSeq(Long sentenceSeq);

    Long addGrammar(GrammerTable grammerTable, String name);
}
