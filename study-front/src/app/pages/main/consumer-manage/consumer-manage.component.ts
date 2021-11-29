import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/common/services/consumer.service';
interface User {
  userId: number;
  username: string;
  email: string;
  mobile: string;
}
@Component({
  selector: 'app-consumer-manage',
  templateUrl: './consumer-manage.component.html',
  styleUrls: ['./consumer-manage.component.less']
})
export class ConsumerManageComponent implements OnInit {

  // consumer信息
  listOfData: User[];
  // 搜索参数
  searchInfo: string = '';

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {
    this.getConsumerList();
  }

  /**
   * 搜索框内容变为空
   */
  searchIsBlank(inputVal: any) {
    if (inputVal === '') {
      this.getConsumerList();
    }
  }

  /**
   * 获取全部用户信息
   */
  getConsumerList() {
    this.consumerService.getConsumerList().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  /**
   * 搜索
   */
  search() {
    if (Number(this.searchInfo) !== 0) {
      this.searchConsumers();
    } else {
      this.getConsumerList();
    }
  }

  /**
   * 查询符合条件的信息
   */
  searchConsumers() {
    this.consumerService.searchConsumer(this.searchInfo).subscribe((res) => {
      this.listOfData = res.data;
    })
  }

}
