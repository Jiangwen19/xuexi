package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.jiangwen.entity.*;
import org.jiangwen.mapper.LessonTableMapper;
import org.jiangwen.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-11-20
 */
@Service
public class LessonTableServiceImpl extends ServiceImpl<LessonTableMapper, LessonTable> implements LessonTableService {

    @Autowired
    LessonTableService lessonTableService;

    @Autowired
    LessonTableMapper lessonTableMapper;

    @Autowired
    SentenceTableService sentenceTableService;

    @Autowired
    SentencePhraseTableService sentencePhraseTableService;

    @Autowired
    SentenceGrammerTableService sentenceGrammerTableService;

    @Autowired
    SentenceWordTableService sentenceWordTableService;

    @Autowired
    UserPracticeHistoryService userPracticeHistoryService;


    @Override
    public int hasLessonNumber(long bookId, long lessonNumber) {
        Map<String, Object> map = new HashMap<>() {
            {
                put("book_id", bookId);
                put("lesson_number", lessonNumber);
            }
        };
        return lessonTableService.count(new QueryWrapper<LessonTable>().allEq(map));
    }

    @Override
    @Transactional
    public List<Long> hasChildSentence(Long[] lessonIds) {
        List<Long> idsInLessons = new ArrayList<>();

        for (Long lessonId : lessonIds) {
            List<Long> sentenceIds = lessonTableMapper.getSentenceIdsByLessonId(lessonId);

            if (sentenceIds.size() != 0) {
                idsInLessons.addAll(sentenceIds);
                deleteMediumTable(sentenceIds);
            }
        }
        return idsInLessons;
    }

    public void deleteMediumTable(List<Long> sentenceIds) {
        sentencePhraseTableService.remove(new QueryWrapper<SentencePhraseTable>().in("sentence_seq", sentenceIds));
        sentenceGrammerTableService.remove(new QueryWrapper<SentenceGrammerTable>().in("sentence_seq", sentenceIds));
        sentenceWordTableService.remove(new QueryWrapper<SentenceWordTable>().in("sentence_seq", sentenceIds));
        userPracticeHistoryService.remove(new QueryWrapper<UserPracticeHistory>().in("sentence_seq", sentenceIds));
    }
}
