import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RoleService } from 'src/app/common/services/role.service';
import { Constants } from 'src/app/common/utility/constants';
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
  selector: 'app-role-manage',
  templateUrl: './role-manage.component.html',
  styleUrls: ['./role-manage.component.less']
})
export class RoleManageComponent implements OnInit {

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

  // 绑定到子组件的roleId
  roleId: number;

  constructor(private roleService: RoleService, private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getRoleList()
  }

  getRoleList() {
    this.roleService.getRoleList().subscribe((roleDta) => {
      let roles = roleDta.data.records;
      this.listOfData = roles.map((role, index) => ({
        id: index,
        roleId: role.roleId,
        roleName: role.roleName,
        symbol: role.symbol,
        remark: role.remark,
        statu: role.statu,
        disabled: false
      }))
    })
  }

  /**
   * 模态框操作
   * @param handleNum 
   * @param roleId 
   */
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
    this.getRoleList();
    this.handleCancel();
  }

  /**
   * 删除气泡确认框
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(roleId: number): void {
    this.nzMessageService.info('click cancel');
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
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
