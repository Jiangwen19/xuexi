package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.SentenceTable;
import org.jiangwen.mapper.SentenceTableMapper;
import org.jiangwen.service.SentenceTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-23
 */
@Service
public class SentenceTableServiceImpl extends ServiceImpl<SentenceTableMapper, SentenceTable> implements SentenceTableService {

    @Autowired
    SentenceTableService sentenceTableService;

    @Autowired
    LessonTableServiceImpl lessonTableServiceImpl;

    @Override
    public List<SentenceTable> sentenceListMatchCode(Long lessonId, String sentenceType) {

        Map<String, Object> map = new HashMap<>() {
            {
                put("lesson_id", lessonId);
                put("sentence_type", sentenceType);
            }
        };
        return sentenceTableService.list(new QueryWrapper<SentenceTable>().allEq(map).orderByAsc("line_no"));
    }

    @Override
    public List<Long> hasItemInDb(Long[] sentenceIds) {
        List<Long> lostIds = new ArrayList<>();
        for (long id : sentenceIds) {
            if (sentenceTableService.getById(id) == null) {
                lostIds.add(id);
                break;
            }
        }
        return lostIds;
    }

    @Override
    public void deleteMediumTable(Long[] sentenceIds) {
        List<Long> sentenceList = Arrays.asList(sentenceIds);
        lessonTableServiceImpl.deleteMediumTable(sentenceList);
    }
}
