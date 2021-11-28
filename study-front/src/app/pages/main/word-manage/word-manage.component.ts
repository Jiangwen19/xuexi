import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CompactSearchVo } from 'src/app/common/model/vo/compact-search-vo';
import { WordVo } from '../../../common/model/vo/word-vo';
import { WordService } from '../../../common/services/word.service';

export interface Data {
  wordId: number,
  wordNameOrignal: string,
  wordNameTranslate: string,
  bookNumber: number,
  bookNameOrignal: string,
  lessonNameOrignal: string,
  disabled: boolean
}

@Component({
  selector: 'app-word-manage',
  templateUrl: './word-manage.component.html',
  styleUrls: ['./word-manage.component.less']
})
export class WordManageComponent implements OnInit {
  // 表格
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 模态框
  isVisible = false;
  wordVo: WordVo = new WordVo();
  // 批量删除
  requestData: number[];
  // 搜索
  isDisabled: boolean = true;
  compactSearchVo: CompactSearchVo = new CompactSearchVo();

  constructor(private wordService: WordService, private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getWordInfoOfAll()
  }

  /**
   * 动态获取输入框的值
   * @param event 
   */
  checkBookNum(inputVal: any) {
    let patternNum: RegExp = /^\d+$/;
    if (inputVal === '') {
      this.isDisabled = true;
      this.getWordInfoOfAll();
    } else if (!patternNum.test(inputVal)) {
      this.isDisabled = true;
      delete this.compactSearchVo.bookNumber;
      this.nzMessageService.info('请输入数字');
    } else {
      this.compactSearchVo.bookNumber = Number(inputVal);
      this.isDisabled = false;
    }
  }

  /**
   * 清除搜索信息
   */
  clearSearchVo() {
    for (let key in this.compactSearchVo) {
      delete this.compactSearchVo[key];
    }
  }

  /**
   * 搜索单词
   */
  searchWords() {
    this.wordService.searchWords(this.compactSearchVo).subscribe((res) => {
      if (res.status === 200) {
        this.listOfData = res.data;
      } else {
        this.clearSearchVo();
      }
    })
  }

  /**
   * 获取所有单词信息
   */
  getWordInfoOfAll() {
    this.wordService.getWordInfoOfAll().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 获取单条记录
   */
  getWordInfoById(wordId: number) {
    this.wordService.getWordInfoById(wordId).subscribe((res) => {
      this.wordVo = res.data;
    })
  }

  /**
   * 弹出模态框
   * @param wordId 
   */
  showModal(wordId: number): void {
    this.getWordInfoById(wordId)
    this.isVisible = true;
  }

  /**
   * 更新确认
   */
  handleOk() {
    this.wordService.wordUpdate(this.wordVo).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getWordInfoOfAll();
        this.handleCancel();
      }
    })
  }

  /**
   * 取消模态框
   */
  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 删除气泡框取消
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 删除一条句子
   * @param wordId
   */
  confirm(wordId: number): void {
    let wordIdArr: number[] = [wordId];
    this.delateWords(wordIdArr, wordId);
  }

  /**
   * 批量删除
   * @param wordIdArr 
   * @param confirm 
   */
  delateWords(wordIdArr: number[], confirm?: number) {
    this.wordService.deleteWordByIds(wordIdArr).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        if (confirm) {
          this.setOfCheckedId.delete(confirm);
        }
        this.getWordInfoOfAll();
      }
    })
  }

  updateCheckedSet(wordId: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(wordId);
    } else {
      this.setOfCheckedId.delete(wordId);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ wordId }) => this.setOfCheckedId.has(wordId));
    this.indeterminate = listOfEnabledData.some(({ wordId }) => this.setOfCheckedId.has(wordId)) && !this.checked;
  }

  onItemChecked(wordId: number, checked: boolean): void {
    this.updateCheckedSet(wordId, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ wordId }) => this.updateCheckedSet(wordId, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    this.requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.wordId))
      .map(val => val.wordId);
    this.delateWords(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
