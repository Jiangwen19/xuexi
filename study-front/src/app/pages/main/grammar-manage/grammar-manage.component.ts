import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CompactSearchVo } from 'src/app/common/model/vo/compact-search-vo';
import { GrammarService } from '../../../common/services/grammar.service';
import { GrammarVo } from './../../../common/model/vo/grammar-vo';
export interface Data {
  grammarId: number,
  grammerTitle: string,
  grammer: string,
  bookNumber: number,
  bookNameOrignal: string,
  lessonNameOrignal: string,
  disabled: boolean
}
@Component({
  selector: 'app-grammar-manage',
  templateUrl: './grammar-manage.component.html',
  styleUrls: ['./grammar-manage.component.less']
})
export class GrammarManageComponent implements OnInit {
  // 表格
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 模态框
  isVisible = false;
  grammarVo: GrammarVo = new GrammarVo();
  // 批量删除
  requestData: number[];
  // 搜索
  isDisabled: boolean = true;
  compactSearchVo: CompactSearchVo = new CompactSearchVo();

  constructor(private grammarService: GrammarService, private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getGrammarInfoOfAll()
  }

  /**
   * 动态获取输入框的值
   * @param event 
   */
  checkBookNum(inputVal: any) {
    let patternNum: RegExp = /^\d+$/;
    if (inputVal === '') {
      this.isDisabled = true;
      this.getGrammarInfoOfAll();
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
   * 搜索文法
   */
  searchGrammars() {
    this.grammarService.searchGrammars(this.compactSearchVo).subscribe((res) => {
      if (res.status === 200) {
        this.listOfData = res.data;
      } else {
        this.clearSearchVo();
      }
    })
  }

  /**
   * 获取所有文法信息
   */
  getGrammarInfoOfAll() {
    this.grammarService.getGrammarInfoOfAll().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 获取单条记录
   */
  getGrammarInfoById(wordId: number) {
    this.grammarService.getGrammarInfoById(wordId).subscribe((res) => {
      this.grammarVo = res.data;
    })
  }

  /**
   * 弹出模态框
   * @param grammarId 
   */
  showModal(grammarId: number): void {
    this.getGrammarInfoById(grammarId)
    this.isVisible = true;
  }

  /**
   * 更新确认
   */
  handleOk() {
    this.grammarService.grammarUpdate(this.grammarVo).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getGrammarInfoOfAll();
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
   * 删除一条语法
   * @param grammarId
   */
  confirm(grammarId: number): void {
    let grammarIdArr: number[] = [grammarId];
    this.delateGrammars(grammarIdArr, grammarId);
  }

  /**
   * 批量删除
   * @param grammarIdArr 
   * @param confirm 
   */
  delateGrammars(grammarIdArr: number[], confirm?: number) {
    this.grammarService.deleteGrammarByIds(grammarIdArr).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        if (confirm) {
          this.setOfCheckedId.delete(confirm);
        }
        this.getGrammarInfoOfAll();
      }
    })
  }

  updateCheckedSet(grammarId: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(grammarId);
    } else {
      this.setOfCheckedId.delete(grammarId);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ grammarId }) => this.setOfCheckedId.has(grammarId));
    this.indeterminate = listOfEnabledData.some(({ grammarId }) => this.setOfCheckedId.has(grammarId)) && !this.checked;
  }

  onItemChecked(grammarId: number, checked: boolean): void {
    this.updateCheckedSet(grammarId, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ grammarId }) => this.updateCheckedSet(grammarId, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    this.requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.grammarId))
      .map(val => val.grammarId);
    this.delateGrammars(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
