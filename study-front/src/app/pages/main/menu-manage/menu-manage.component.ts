import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MenuService } from 'src/app/common/services/menu.service';
import { Constants } from 'src/app/common/utility/constants';
export interface TreeNodeInterface {
  key: string;
  level?: number;
  expand?: boolean;

  menuId: number;
  title: string;
  onlyCode: string;
  path: string;
  component: string;
  icon: string;
  menuType: string;
  orderNum: number;
  state: string;

  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}
@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrls: ['./menu-manage.component.less']
})
export class MenuManageComponent implements OnInit {
  // 动态一览
  menuType = Constants.MenuType;
  menuState = Constants.MenuState;
  listOfMapData: TreeNodeInterface[];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  // 编辑模态框
  isMenuAdd: boolean;
  popupsTitle: string;
  isVisible = false;

  // 绑定到子组件的menuId
  menuId: number;

  /**
   * 一览相关
   * @param array 
   * @param data 
   * @param $event 
   * @returns 
   */
  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  /**
   * 构造方法
   * @param authService 
   */
  constructor(private menuService: MenuService, private nzMessageService: NzMessageService) { }

  /**
   * 获取菜单list
   */
  ngOnInit() {
    this.getMenuList()
  }

  /**
   * 获取菜单list
   */
  getMenuList() {
    this.menuService.getMenuList().subscribe((resList) => {
      this.listOfMapData = resList.data;
      this.listOfMapData.forEach(item => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
    })
  }

  /**
   * 接受子组件更新消息
   * @param isUpdate
   */
  accept() {
    this.getMenuList();
    this.handleCancel();
  }

  /**
   * 模态框操作
   */
  showModal(menuId: number): void {
    if (menuId === -1) {
      this.isMenuAdd = true
      this.popupsTitle = "新增菜单";
    } else {
      this.menuId = menuId;
      this.isMenuAdd = false;
      this.popupsTitle = "修改菜单";
    }
    this.isVisible = true;
  }

  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     this.isVisible = false;
  //     this.isConfirmLoading = false;
  //   }, 1000);
  // }

  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 删除气泡确认框
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(menuId: number): void {
    this.menuService.deleteMenuById(menuId).subscribe((res) => {
      if (res.status === 200) {
        this.nzMessageService.info(res.msg);
        this.getMenuList();
      }
    })
  }


}
