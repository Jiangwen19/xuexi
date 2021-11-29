import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StringUtil } from 'src/app/common/utility/string-util';
import { SentenceVo } from '../../../common/model/vo/sentence-vo';
import { SentenceService } from '../../../common/services/sentence.service';

export interface Data {
  sentenceSeq: number,
  lessonId: number,
  lineNo: number,
  sentenceType: string,
  sentenceNameTranslate: string,
  sentenceNameOrignal: string
  disabled: boolean
}
@Component({
  selector: 'app-sentence-manage',
  templateUrl: './sentence-manage.component.html',
  styleUrls: ['./sentence-manage.component.less']
})
export class SentenceManageComponent implements OnInit {
  // 标签页标签
  tabs: any[] = [];
  // 当前选中的CodeNo
  activatedCodeNo: string;
  // 课程Id
  lessonId: number;
  // 表格
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 模态框
  isVisible = false;
  // 实体对象
  sentenceVo: SentenceVo = new SentenceVo();
  // 批量删除
  requestData: number[];

  constructor(private sentenceService: SentenceService, private route: ActivatedRoute,
    private nzMessageService: NzMessageService) { this.getLessonId() }

  ngOnInit() {
    this.getAllCode();
  }

  /**
   * 获取路由传值
   */
  getLessonId() {
    this.route.queryParams.subscribe((res) => {
      if (!StringUtil.isEmpty(res.lessonId)) {
        sessionStorage.setItem('lastLessonId', res.lessonId);
        this.lessonId = res.lessonId;
      } else {
        this.lessonId = +sessionStorage.getItem('lastLessonId');
      }
    })
  }

  /**
   * 获取所有Code信息
   */
  getAllCode() {
    this.sentenceService.getCodeList().subscribe((res) => {
      this.tabs = res.data;
      this.activatedCodeNo = res.data[0].codeNo
      this.getSentences(this.activatedCodeNo);
    })
  }

  /**
   * 根据Code类型获得相关句子信息
   * @param codeNo 
   */
  getSentences(activatedTabCodeNo: string) {
    let sentenceVo: SentenceVo = new SentenceVo();
    sentenceVo.lessonId = this.lessonId;
    sentenceVo.sentenceType = activatedTabCodeNo;
    this.sentenceService.getSentencesMatchCode(sentenceVo).subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 所选中标签页的回掉
   * @param tab 
   */
  selectTab(tab: any) {
    this.setOfCheckedId.clear();
    this.activatedCodeNo = tab.codeNo;
    this.getSentences(tab.codeNo);
  }

  /**
   * 显示模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  /**
   * 添加确认
   */
  handleOk() {
    this.sentenceVo.lessonId = this.lessonId;
    this.sentenceVo.sentenceType = this.activatedCodeNo;
    this.sentenceService.addSentence(this.sentenceVo).subscribe((res) => {
      if (res.status === 200) {
        this.getSentences(this.activatedCodeNo);
        this.handleCancel();
      }
    })
  }

  /**
   * 取消按钮
   */
  handleCancel(): void {
    this.isVisible = false;
    for (let key in this.sentenceVo) {
      delete this.sentenceVo[key];
    }
  }

  /**
  * 删除气泡确认框
  */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 删除一条句子
   * @param sentenceSeq
   */
  confirm(sentenceSeq: number): void {
    let sentenceArr: number[] = [sentenceSeq];
    this.delateSentenceInLesson(sentenceArr, sentenceSeq);
  }

  /**
   * 批量删除句子
   * @param sentenceArr 
   * @param confirm 
   */
  delateSentenceInLesson(sentenceArr: number[], confirm?: number) {
    this.sentenceService.delateSentences(sentenceArr).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        if (confirm) {
          this.setOfCheckedId.delete(confirm);
        }
        this.getSentences(this.activatedCodeNo);
      }
    })
  }

  updateCheckedSet(sentenceSeq: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(sentenceSeq);
    } else {
      this.setOfCheckedId.delete(sentenceSeq);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ sentenceSeq }) => this.setOfCheckedId.has(sentenceSeq));
    this.indeterminate = listOfEnabledData.some(({ sentenceSeq }) => this.setOfCheckedId.has(sentenceSeq)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ sentenceSeq }) => this.updateCheckedSet(sentenceSeq, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    this.requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.sentenceSeq))
      .map(val => val.sentenceSeq);
    this.delateSentenceInLesson(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
