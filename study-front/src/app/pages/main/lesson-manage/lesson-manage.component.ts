import { Component, KeyValueDiffer, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { LessonService } from '../../../common/services/lesson.service';

export interface Data {
  id: number,
  roleId: number,
  roleName: string,
  symbol: string,
  remark: string,
  statu: number,
  disabled: boolean
}

@Component({
  selector: 'app-lesson-manage',
  templateUrl: './lesson-manage.component.html',
  styleUrls: ['./lesson-manage.component.less']
})
export class LessonManageComponent implements OnInit {

  // 标签页
  tabs: Array<{ name: string; bookId: number; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'top';
  selectedIndex = 1;
  selectedBook: any;

  // 监听绑定属性值变化
  differ: KeyValueDiffer<string, any>;

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 编辑模态框
  isConfirmLoading: boolean;
  popupsHandle: number;
  popupsTitle: string;
  isVisible = false;
  // 绑定到子组件的roleId
  roleId: number;
  // 搜索参数
  searchInfo: string = '';
  // 批量删除提交数据
  requestData: number[];
  constructor(private nzMessageService: NzMessageService, private lessonService: LessonService) { }

  ngOnInit() {
    this.getAllBookNumber()
    // for (let i = 0; i < 30; i++) {
    //   this.tabs.push({
    //     name: `图书编号: ${i}`,
    //     disabled: i === 28,
    //     content: `Content of tab ${i}`
    //   });
    // }
  }

  getAllBookNumber() {
    this.lessonService.getAllBookNumber().subscribe((res) => {
      let books = res.data;
      for (let book of books) {
        this.tabs.push({
          name: `${book.bookNumber}: ${book.bookNameOrignal}`,
          bookId: book.bookId,
          disabled: false,
        });
      }
    })
  }

  search() {

  }

  log(args: any[]): void {
    // console.log(args);
  }

  selectBook(arg: any): void {
    this.selectedBook = arg;
  }

  showModal(handleNum: number, roleId?: number): void {

    if (handleNum === 1) {
      this.popupsHandle = 1
      this.popupsTitle = "新增角色";
    } else if (handleNum === 2) {
      this.roleId = roleId;
      this.popupsHandle = 2;
      this.popupsTitle = "分配限权";
    } else if (handleNum === 3) {
      this.roleId = roleId;
      this.popupsHandle = 3;
      this.popupsTitle = "编辑";
    }
    this.isVisible = true;
  }

  /**
   * 模态框取消
   */
  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 接受子组件更新消息
   * @param isUpdate
   */
  accept() {
    // this.getRoleListAll(); 
    this.handleCancel();
  }

  /**
   * 删除气泡确认框
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 删除点击事件
   * @param roleId 
   */
  confirm(roleId: number, dataId?: number): void {
    let roleIdArr: number[] = [roleId];
    // this.delateRoles(roleIdArr, dataId);
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    this.requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id))
      .map(val => val.roleId);
    // this.delateRoles(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
