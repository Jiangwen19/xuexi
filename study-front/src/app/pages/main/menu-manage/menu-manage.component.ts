import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { ConvertUtils } from 'src/app/common/utility/convert-utils';
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
  TagMap = new Map([
    ['目录', 'blue'],
    ['菜单', 'green'],
    ['按钮', 'orange'],
    ['正常', 'green'],
    ['禁用', 'geekblue'],
    ['异常', 'red'],
  ]);
  listOfMapData: TreeNodeInterface[];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

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

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getMenuAndAuthoritys().subscribe((resNav) => {
      let getNav = resNav.data.nav;
      this.listOfMapData = ConvertUtils.navConvert(0, '', getNav);
      this.listOfMapData.forEach(item => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
    })

  }

}
