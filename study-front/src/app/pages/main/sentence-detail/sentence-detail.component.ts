import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SentenceService } from 'src/app/common/services/sentence.service';
import { StringUtil } from 'src/app/common/utility/string-util';
import { PhraseVo } from '../../../common/model/vo/phrase-vo';
import { WordVo } from '../../../common/model/vo/word-vo';
import { GrammarService } from '../../../common/services/grammar.service';
import { PhraseService } from '../../../common/services/phrase.service';
import { WordService } from '../../../common/services/word.service';
import { GrammarVo } from './../../../common/model/vo/grammar-vo';
@Component({
  selector: 'app-sentence-detail',
  templateUrl: './sentence-detail.component.html',
  styleUrls: ['./sentence-detail.component.less']
})
export class SentenceDetailComponent implements OnInit {
  // 初始化数据
  wordData: any[] = [];
  phraseData: any[] = [];
  grammarData: any[] = [];
  sentenceDetail: any[] = [''];
  sentenceSqe: number;
  // 操作按钮
  addWord: boolean = false;
  addPrase: boolean = false;
  addGrammar: boolean = false;
  // 实体对象
  wordVo: WordVo = new WordVo();
  phraseVo: PhraseVo = new PhraseVo();
  grammarVo: GrammarVo = new GrammarVo();

  constructor(private route: ActivatedRoute,
    private nzMessageService: NzMessageService,
    private sentenceService: SentenceService,
    private wordService: WordService,
    private phraseService: PhraseService,
    private grammarService: GrammarService) {
    this.getSentenceSqe()
  }

  ngOnInit() {
    this.getSentenceDetail();
    this.getWord();
    this.getPhrase();
    this.getGrammar();
  }

  /**
   * 获取句子Id
   */
  getSentenceSqe() {
    this.route.queryParams.subscribe((res) => {
      this.sentenceSqe = res.sentenceSeq;
    })
  }

  /**
   * 获取句子详情信息
   */
  getSentenceDetail() {
    this.sentenceService.getSentenceDetail(this.sentenceSqe).subscribe((res) => {
      this.sentenceDetail = res.data;
    })
  }

  /**
   * 获得该句子所属词语
   */
  getWord() {
    this.wordService.getWordInSentence(this.sentenceSqe).subscribe((res) => {
      this.wordData = res.data;
    })
  }

  /**
   * 获得该句子所属短语
   */
  getPhrase() {
    this.phraseService.getPhraseInSentence(this.sentenceSqe).subscribe((res) => {
      this.phraseData = res.data;
    })
  }

  /**
   * 获得该句子所属文法
   */
  getGrammar() {
    this.grammarService.getGrammarInSentence(this.sentenceSqe).subscribe((res) => {
      this.grammarData = res.data;
    })
  }

  /**
   * 取消删除气泡框
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 删除一条记录
   * @param id 
   */
  confirm(id: number, operateKey: string): void {
    if (operateKey === 'wordId') {
      this.wordService.deleteWordByIdInSentence(this.sentenceSqe, id).subscribe((res) => {
        if (res.status === 200) {
          this.nzMessageService.info(res.msg);
          this.getWord();
        }
      })
    }
    else if (operateKey === 'phraseId') {
      this.phraseService.deletePhraseByIdInSentence(this.sentenceSqe, id).subscribe((res) => {
        if (res.status === 200) {
          this.nzMessageService.info(res.msg);
          this.getPhrase();
        }
      })
    }
    else if (operateKey === 'grammerId') {
      this.grammarService.deleteGrammarByIdInSentence(this.sentenceSqe, id).subscribe((res) => {
        if (res.status === 200) {
          this.nzMessageService.info(res.msg);
          this.getGrammar();
        }
      })
    }
  }

  /**
   * 新增操作
   * @param operateKey 
   */
  addOperate(operateKey: string) {
    if (operateKey === 'word') {
      this.addWord = true;
    }
    else if (operateKey === 'phrase') {
      this.addPrase = true;
    }
    else if (operateKey === 'grammar') {
      this.addGrammar = true;
    }
  }

  /**
   * 取消操作
   * @param operateKey 
   */
  cancelOperate(operateKey: string) {
    if (operateKey === 'word') {
      this.addWord = false;
      for (let key in this.wordVo) {
        delete this.wordVo[key];
      }
    }
    else if (operateKey === 'phrase') {
      this.addPrase = false;
      for (let key in this.phraseVo) {
        delete this.phraseVo[key];
      }
    }
    else if (operateKey === 'grammar') {
      this.addGrammar = false;
      for (let key in this.grammarVo) {
        delete this.grammarVo[key];
      }
    }
  }

  /**
   * 表单提交
   * @param operateKey  
   */
  commit(operateKey: string) {
    if (operateKey === 'word') {
      if (StringUtil.isEmpty(this.wordVo.wordNameOrignal)) {
        this.nzMessageService.info('请输入单词');
        return;
      }
      this.wordService.addWordInSentence(this.sentenceSqe, this.wordVo).subscribe((res) => {
        if (res.status === 200) {
          this.getWord();
          this.cancelOperate('word')
          this.nzMessageService.info(res.msg);
        }
      })
    }
    else if (operateKey === 'phrase') {
      if (StringUtil.isEmpty(this.phraseVo.phraseNameOrignal)) {
        this.nzMessageService.info('请输入短语');
        return;
      }
      this.phraseService.addPhraseInSentence(this.sentenceSqe, this.phraseVo).subscribe((res) => {
        if (res.status === 200) {
          this.getPhrase()
          this.cancelOperate('phrase')
          this.nzMessageService.info(res.msg);
        }
      })
    }
    else if (operateKey === 'grammar') {
      if (StringUtil.isEmpty(this.grammarVo.grammerTitle) || StringUtil.isEmpty(this.grammarVo.grammer)) {
        this.nzMessageService.info('请输入文法标题及内容');
        return;
      }
      this.grammarService.addGrammarInSentence(this.sentenceSqe, this.grammarVo).subscribe((res) => {
        if (res.status === 200) {
          this.getGrammar()
          this.cancelOperate('grammar')
          this.nzMessageService.info(res.msg);
        }
      })
    }
  }

}
