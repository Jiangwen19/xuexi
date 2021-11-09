import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/common/services/menu.service';
import { RoleService } from 'src/app/common/services/role.service';

@Component({
  selector: 'app-role-assign',
  templateUrl: './role-assign.component.html',
  styleUrls: ['./role-assign.component.less']
})
export class RoleAssignComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  @Input() assignRoleId: number;
  roleHasMenuIds: number[];
  MenuList: any[];

  constructor(private roleService: RoleService, private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuList()
    this.getRoleInfo(this.assignRoleId)
  }

  /**
   * 获取角色限权信息
   */
  getRoleInfo(roleId: number) {
    this.roleService.getRoleInfo(roleId).subscribe((roleInfo) => {
      this.roleHasMenuIds = roleInfo.data.menuIds;
    })
  }

  /**
   * 获取所有菜单权限
   */
  getMenuList() {
    this.menuService.getMenuList().subscribe((resList) => {
      this.MenuList = resList.data
    })
  }

  log(value: string[]): void {
    console.log(value);
  }
}
