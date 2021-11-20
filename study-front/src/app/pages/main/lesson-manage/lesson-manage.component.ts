import { Component, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LessonService } from '../../../common/services/lesson.service';

export interface Data {
  id: number,
  lessonId: number,
  lessonNumber: number,
  lessonNameOrignal: string,
  lessonNameTranslate: string,
  description: number,
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
  selectedIndexMap = new Map<number, number>();
  selectedBookNumber: number;
  minNumber: number;
  maxNumber: number;
  // 绑定到子组件的Id;
  lessonId: number;
  selectBook: { name: string; bookId: number };
  // 搜索参数
  searchInfo: string = '';
  // 监听绑定属性值变化
  differ: KeyValueDiffer<string, any>;
  // 自定义表格选择与操作
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // 编辑模态框
  popupsHandle: number;
  popupsTitle: string;
  isVisible = false;
  // 批量删除提交数据
  requestData: number[];
  constructor(private differs: KeyValueDiffers, private nzMessageService: NzMessageService, private lessonService: LessonService) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() { this.getAllBookNumber() }

  /**
   * 获取所有图书基本信息
   */
  getAllBookNumber() {
    this.lessonService.getAllBookNumber().subscribe((res) => {
      let books = res.data;
      this.getLessonsByBookId(books[0].bookId);
      this.minNumber = books[0].bookNumber;
      this.selectedBookNumber = books[0].bookNumber;
      this.maxNumber = books[books.length - 1].bookNumber;
      this.selectBook = { name: `${books[0].bookNumber}: ${books[0].bookNameOrignal}`, bookId: books[0].bookId };
      for (let i = 0; i < books.length; i++) {
        this.selectedIndexMap.set(books[i].bookNumber, i);
        this.tabs.push({
          name: `${books[i].bookNumber}: ${books[i].bookNameOrignal}`,
          bookId: books[i].bookId,
          disabled: false,
        });
      }
    })
  }

  /**
   * 获取图书相关课程
   */
  getLessonsByBookId(bookId: number) {
    this.lessonService.getLessonsByBookId(bookId).subscribe((res) => {
      let lessons = res.data;
      this.convertLessons(lessons);
    })
  }

  /**
   * 显示格式
   * @param lessons 
   */
  convertLessons(lessons: any) {
    this.listOfData = lessons.map((lesson, index) => ({
      id: index,
      lessonId: lesson.lessonId,
      lessonNumber: lesson.lessonNumber,
      lessonNameOrignal: lesson.lessonNameOrignal,
      lessonNameTranslate: lesson.lessonNameTranslate,
      description: lesson.description,
      disabled: false
    }))
  }

  /**
   * 搜索课文
   */
  search() {
    if (this.searchInfo !== '') {
      this.searchLessonsByInfo(this.selectBook.bookId, this.searchInfo);
    } else {
      this.getLessonsByBookId(this.selectBook.bookId);
    }
  }

  /**
   * 查询符合条件的课文
   */
  searchLessonsByInfo(bookId: number, searchInfo: string) {
    this.lessonService.searchLessonsByInfo(bookId, searchInfo).subscribe((res) => {
      let roles = res.data;
      this.convertLessons(roles);
    })
  }

  /**
   * 监听属性绑定值变化
   */
  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'searchInfo' && item.previousValue !== '' && item.currentValue === '') {
          this.getLessonsByBookId(this.selectBook.bookId);
        }
      });
    }
  }

  /**
   * tab选中的回调
   * @param arg 
   */
  logSelectBook(arg: any): void {
    this.selectBook = { name: arg.name, bookId: arg.bookId };
    this.getLessonsByBookId(arg.bookId);
  }

  /**
   * 模态框控制
   * @param handleNum 
   * @param lessonId 
   */
  showModal(handleNum: number, lessonId?: number): void {

    if (handleNum === 1) {
      this.popupsHandle = 1
      this.popupsTitle = "新增课文";
    } else if (handleNum === 2) {
      this.lessonId = lessonId;
      this.popupsHandle = 2;
      this.popupsTitle = "修改课文信息";
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
  accept(acc: number) {
    if (acc === 200) {
      this.getLessonsByBookId(this.selectBook.bookId);
      this.handleCancel();
    }
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

  log(args: any[]): void {
    // console.log(args);
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
      .map(val => val.lessonId);
    // this.delateRoles(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
