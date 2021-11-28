import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CompactSearchVo } from 'src/app/common/model/vo/compact-search-vo';
import { PhraseVo } from '../../../common/model/vo/phrase-vo';
import { PhraseService } from '../../../common/services/phrase.service';
export interface Data {
  phraseId: number,
  phraseNameOrignal: string,
  phraseNameTranslate: string,
  bookNumber: number,
  bookNameOrignal: string,
  lessonNameOrignal: string,
  disabled: boolean
}
@Component({
  selector: 'app-phrase-manage',
  templateUrl: './phrase-manage.component.html',
  styleUrls: ['./phrase-manage.component.less']
})
export class PhraseManageComponent implements OnInit {

  // 表格
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 模态框
  isVisible = false;
  phraseVo: PhraseVo = new PhraseVo();
  // 批量删除
  requestData: number[];
  // 搜索
  isDisabled: boolean = true;
  compactSearchVo: CompactSearchVo = new CompactSearchVo();

  constructor(private phraseService: PhraseService, private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getPhraseInfoOfAll()
  }

  /**
   * 动态获取输入框的值
   * @param event 
   */
  checkBookNum(inputVal: any) {
    let patternNum: RegExp = /^\d+$/;
    if (inputVal === '') {
      this.isDisabled = true;
      this.getPhraseInfoOfAll();
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
   * 搜索短语
   */
  searchPhrases() {
    this.phraseService.searchPhrases(this.compactSearchVo).subscribe((res) => {
      if (res.status === 200) {
        this.listOfData = res.data;
      } else {
        this.clearSearchVo();
      }
    })
  }

  /**
   * 获取所有短语信息
   */
  getPhraseInfoOfAll() {
    this.phraseService.getPhraseInfoOfAll().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 获取单条记录
   */
  getPhraseInfoById(phraseId: number) {
    this.phraseService.getPhraseInfoById(phraseId).subscribe((res) => {
      this.phraseVo = res.data;
    })
  }

  /**
   * 弹出模态框
   * @param phraseId
   */
  showModal(phraseId: number): void {
    this.getPhraseInfoById(phraseId)
    this.isVisible = true;
  }

  /**
   * 更新确认
   */
  handleOk() {
    this.phraseService.phraseUpdate(this.phraseVo).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getPhraseInfoOfAll();
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
   * 删除一条短语
   * @param phraseId
   */
  confirm(phraseId: number): void {
    let phraseIdArr: number[] = [phraseId];
    this.delatePhrases(phraseIdArr, phraseId);
  }

  /**
   * 批量删除
   * @param phraseIdArr 
   * @param confirm 
   */
  delatePhrases(phraseIdArr: number[], confirm?: number) {
    this.phraseService.deletePhraseByIds(phraseIdArr).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        if (confirm) {
          this.setOfCheckedId.delete(confirm);
        }
        this.getPhraseInfoOfAll();
      }
    })
  }

  updateCheckedSet(phraseId: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(phraseId);
    } else {
      this.setOfCheckedId.delete(phraseId);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ phraseId }) => this.setOfCheckedId.has(phraseId));
    this.indeterminate = listOfEnabledData.some(({ phraseId }) => this.setOfCheckedId.has(phraseId)) && !this.checked;
  }

  onItemChecked(wordId: number, checked: boolean): void {
    this.updateCheckedSet(wordId, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ phraseId }) => this.updateCheckedSet(phraseId, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    this.requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.phraseId))
      .map(val => val.phraseId);
    this.delatePhrases(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }
}
