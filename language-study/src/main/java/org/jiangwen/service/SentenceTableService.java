package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.entity.SentenceTable;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
public interface SentenceTableService extends IService<SentenceTable> {

    List<SentenceTable> sentenceListMatchCode(Long lessonId, String sentenceType);

    List<Long> hasItemInDb(Long[] sentenceIds);

    void deleteMediumTable(Long[] sentenceIds);
}
