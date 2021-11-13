import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoleService } from 'src/app/common/services/role.service';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-user-assign',
  templateUrl: './user-assign.component.html',
  styleUrls: ['./user-assign.component.less']
})
export class UserAssignComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  @Input() assignUserId: number;
  userRoles: number[] = [];
  selectRoleIds: number[] = [];
  checkboxChange: boolean = false;
  roles: any[];

  constructor(private roleService: RoleService, private userService: UserService) { }

  ngOnInit() {
    this.roleOfAll();
    this.userInfoById(this.assignUserId);
  }

  // 根据Id获取用户信息
  userInfoById(userId: number) {
    this.userService.userInfoById(userId).subscribe((resUser) => {
      resUser.data.roles.forEach(element => {
        this.userRoles.push(element.roleId)
      });
    })
  }

  /**
   * 获取所有角色列表
   */
  roleOfAll() {
    this.roleService.getRoleListAll().subscribe((resRoles) => {
      this.roles = resRoles.data.map((role) => ({
        roleId: role.roleId,
        roleName: role.roleName,
      }))
    })
  }

  /**
   * 多选框动态赋值
   * @param value
   */
  log(value: number[]): void {
    this.checkboxChange = true;
    this.selectRoleIds = value;
  }

  /**
   * 分配用户角色
   */
  commit() {
    if (!this.checkboxChange) {
      this.selectRoleIds = this.userRoles;
    }
    this.userService.userAddRolesById(this.assignUserId, this.selectRoleIds).subscribe(() => {
      this.updateEmit.emit(true);
    })
  }
}
