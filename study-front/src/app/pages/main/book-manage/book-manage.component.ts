import { Component, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BookService } from 'src/app/common/services/book.service';

export interface Data {
  bookId: number,
  bookNumber: number,
  bookNameOrignal: string,
  bookNameTranslate: string,
  description: string,
  creater: string,
  disabled: boolean
}
@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.less']
})
export class BookManageComponent implements OnInit {

  // 监听绑定属性值变化
  differ: KeyValueDiffer<string, any>;

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
  // 绑定到子组件的bookId
  bookId: number;
  // 搜索参数
  searchInfo: string = '';

  constructor(private bookService: BookService, private nzMessageService: NzMessageService, private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() { this.getBookListAll() }

  /**
   * 获取图书一览
   */
  getBookListAll() {
    this.bookService.getBookListAll().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 模态框操作
   * @param handleNum 
   * @param bookId 
   */
  showModal(handleNum: number, bookId?: number): void {

    if (handleNum === 1) {
      this.popupsHandle = 1
      this.popupsTitle = "新增图书";
    } else if (handleNum === 2) {
      this.bookId = bookId;
      this.popupsHandle = 2;
      this.popupsTitle = "编辑图书基本信息";
    } else if (handleNum === 3) {
      this.bookId = bookId;
      this.popupsHandle = 3;
      this.popupsTitle = "书本详情";
    }
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 删除气泡确认框
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 气泡框确认
   * @param menuId 
   */
  confirm(bookId: number): void {
    this.bookService.deleteBookById(bookId).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        this.getBookListAll();
      }
    })
  }

  accept(acc: number) {
    if (acc === 200) {
      this.getBookListAll();
      this.handleCancel();
    }
  }

  /**
   * 搜索
   */
  search() {
    if (this.searchInfo !== '') {
      this.searchBooks();
    } else {
      this.getBookListAll();
    }
  }

  /**
   * 查询符合条件的信息
   */
  searchBooks() {
    this.bookService.searchBooks(this.searchInfo).subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 搜索绑定属性值变化监听
   */
  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'searchInfo' && item.previousValue !== '' && item.currentValue === '') {
          this.getBookListAll();
        }
      });
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ bookId }) => this.setOfCheckedId.has(bookId));
    this.indeterminate = listOfEnabledData.some(({ bookId }) => this.setOfCheckedId.has(bookId)) && !this.checked;
  }

}
