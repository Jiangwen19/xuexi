import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ConsumerService } from 'src/app/common/services/consumer.service';
import { Constants } from 'src/app/common/utility/constants';
interface History {
  historyId: number;
  sentenceSeq: number;
  mistakeCount: number;
  lessonNameOrignal: string;
  bookNumber: number;
  bookNameOrignal: string;
}
@Component({
  selector: 'app-history-manage',
  templateUrl: './history-manage.component.html',
  styleUrls: ['./history-manage.component.less']
})
export class HistoryManageComponent implements OnInit {

  // tab信息
  tabs = Constants.tabs;
  // 当前userId
  userId: number;
  // 表格一览数据
  listOfData: History[];

  constructor(private route: ActivatedRoute, private consumerService: ConsumerService,
    private nzMessageService: NzMessageService) { this.getUserId() }

  ngOnInit() {
    this.getFavList();
  }

  /**
   * 获得路由传值
   */
  getUserId() {
    this.route.queryParams.subscribe((res) => {
      this.userId = res.userId;
    })
  }

  /**
   * 获取收藏夹
   */
  getFavList() {
    this.consumerService.getFavList(this.userId).subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 获取错题本
   */
  getMisList() {
    this.consumerService.getMisList(this.userId).subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 选择标签页
   * @param tab 
   */
  selectTab(tab: any) {
    tab.name === '错题本' ? this.getMisList() : this.getFavList();
  }

  /**
   * 删除记录
   * @param historyId 
   * @param tabName 
   */
  del(historyId: number, tabName: string) {
    let IdArr: number[] = [historyId];
    tabName === '错题本' ? this.deleteMisByIds(IdArr) : this.deleteFavByIds(IdArr);
  }

  /**
   * 删除收藏夹
   */
  deleteFavByIds(favIds: number[]) {
    this.consumerService.deleteFavByIds(favIds).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getFavList();
      }
    })
  }

  /**
   * 删除错题本
   * @param misIds 
   */
  deleteMisByIds(misIds: number[]) {
    this.consumerService.deleteMisByIds(misIds).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getMisList();
      }
    })
  }

  /**
   * 气泡框取消
   */
  cancel(): void { this.nzMessageService.info('click cancel') }
}
