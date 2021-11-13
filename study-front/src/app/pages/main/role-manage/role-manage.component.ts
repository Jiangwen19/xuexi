import { Component, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
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

  // 监听绑定属性值变化
  differ: KeyValueDiffer<string, any>;
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
  // 绑定到子组件的roleId
  roleId: number;
  // 搜索参数
  searchInfo: string = '';
  // 批量删除提交数据
  requestData: number[];

  constructor(private differs: KeyValueDiffers, private roleService: RoleService, private nzMessageService: NzMessageService) {
    this.differ = this.differs.find({}).create();
  }

  /**
   * 监听属性绑定值变化
   */
  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'searchInfo' && item.previousValue !== '' && item.currentValue === '') {
          this.getRoleListAll();
        }
      });
    }
  }

  ngOnInit() {
    this.getRoleListAll();
  }

  /**
   * 按条件查询
   * 条件为空搜索所有
   */
  search() {
    if (this.searchInfo !== '') {
      this.searchRoles();
    } else {
      this.getRoleListAll();
    }
  }

  /**
   * 查询符合条件的信息
   */
  searchRoles() {
    this.roleService.searchRoles(this.searchInfo).subscribe((res) => {
      let roles = res.data.records;
      this.convertRoles(roles);
    })
  }

  /**
   * 获取所有角色信息
   */
  getRoleListAll() {
    this.roleService.getRoleListAll().subscribe((roleDta) => {
      let roles = roleDta.data;
      this.convertRoles(roles);
    })
  }

  /**
   * role显示格式转换
   * @param roles 
   */
  convertRoles(roles: any) {
    this.listOfData = roles.map((role, index) => ({
      id: index,
      roleId: role.roleId,
      roleName: role.roleName,
      symbol: role.symbol,
      remark: role.remark,
      statu: role.statu,
      disabled: false
    }))
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
    this.getRoleListAll();
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
    this.delateRoles(roleIdArr, dataId);
  }

  /**
   * 批量删除角色信息
   * @param roleIds 
   */
  delateRoles(roleIds: number[], dataId?: number) {
    if (dataId) {
      this.roleService.deleteRoleByIds(roleIds).subscribe((res) => {
        this.nzMessageService.info(res.msg);
        if (res.status === 200) {
          if (this.setOfCheckedId.has(dataId)) { this.setOfCheckedId.delete(dataId); }
          this.getRoleListAll();
        }
      })
    } else {
      this.roleService.deleteRoleByIds(roleIds).subscribe((res) => {
        this.nzMessageService.info(res.msg);
        this.getRoleListAll();
      })
    }
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
    this.delateRoles(this.requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

}
