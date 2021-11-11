import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/common/services/user.service';
import { Constants } from 'src/app/common/utility/constants';

export interface Data {
  id: number,
  userId: number,
  username: string,
  roleName: string,
  email: string,
  mobile: string,
  statu:number,
  createTime:string,
  disabled: boolean
}
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  username: string;
  // 拿到状态码对应信息
  menuState = Constants.MenuState;

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
  // 绑定到子组件的userId
  userId: number;
  // 搜索参数
  searchInfo: string = '';
  // 批量删除提交数据
  requestData: number[];

  constructor(private nzMessageService: NzMessageService, private userService: UserService) { }

  ngOnInit() {
  }

  search() {

  }

  showModal(handleNum: number, userId?: number): void {

    if (handleNum === 1) {
      this.popupsHandle = 1
      this.popupsTitle = "新增用户";
    } else if (handleNum === 2) {
      this.userId = userId;
      this.popupsHandle = 2;
      this.popupsTitle = "分配角色";
    } else if (handleNum === 3) {
      this.userId = userId;
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
  confirm(roleId: number): void {
    let roleIdArr: number[] = [roleId];
    if (this.delateUsers(roleIdArr)) {
      let index = this.requestData.indexOf(roleId);
      if (index !== -1) {
        this.requestData.slice(index, 1);
      }
    }
  }

  /**
   * 批量删除角色信息
   * @param roleIds 
   */
  delateUsers(userIds: number[]): boolean {
    let deleteOk: boolean;
    // this.userService.deleteUserByIds(userIds).subscribe((res) => {
    //   this.nzMessageService.info(res.msg);
    //   if (res.status === 200) {
    //     this.getUserAll();
    //     deleteOk = true;
    //   } else {
    //     deleteOk = false;
    //   }
    // })
    return deleteOk;
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
      .map(val => val.userId);
    this.delateUsers(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}

