import { Component, OnInit } from '@angular/core';

// export interface TreeNodeInterface {
//   menuId: number;
//   title: string;
//   onlyCode: string;
//   icon?: string;
//   menuType?: number;
//   path?: string;
//   component?: string;
//   ordernum?: number;
//   statu?: number;
//   operate?: string;
//   children?: TreeNodeInterface[];
//   parent?: TreeNodeInterface;
// }

export interface TreeNodeInterface {
  key: string;
  name: string;
  age?: number;
  level?: number;
  expand?: boolean;
  address?: string;
  aaaaa?: string;
  bbbbb?: string;
  ccccc?: string;
  ddddd?: string;
  eeeee?: string;
  fffff?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrls: ['./menu-manage.component.less']
})
export class MenuManageComponent implements OnInit {

  listOfMapData: TreeNodeInterface[] = [
    {
      key: `1`,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
      children: [
        {
          key: `1-1`,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No',
          aaaaa: '你好',
          bbbbb: '你好',
          ccccc: '你好',
          ddddd: '你好',
          eeeee: '你好',
          fffff: '你好',
          children: [
            {
              key: `1-1-1`,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No',
              aaaaa: '你好',
              bbbbb: '你好',
              ccccc: '你好',
              ddddd: '你好',
              eeeee: '你好',
              fffff: '你好',
            },
            {
              key: `1-1-2`,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No',
              aaaaa: '你好',
              bbbbb: '你好',
              ccccc: '你好',
              ddddd: '你好',
              eeeee: '你好',
              fffff: '你好',
            }
          ]
        },
        {
          key: `1-2`,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No',
          aaaaa: '你好',
          bbbbb: '你好',
          ccccc: '你好',
          ddddd: '你好',
          eeeee: '你好',
          fffff: '你好',
          children: [
            {
              key: `1-2-1`,
              name: 'Jim Green',
              age: 42,
              address: 'London No',
              aaaaa: '你好',
              bbbbb: '你好',
              ccccc: '你好',
              ddddd: '你好',
              eeeee: '你好',
              fffff: '你好',
            },
            {
              key: `1-2-2`,
              name: 'Jim Green',
              age: 42,
              address: 'London No',
              aaaaa: '你好',
              bbbbb: '你好',
              ccccc: '你好',
              ddddd: '你好',
              eeeee: '你好',
              fffff: '你好',
            },
            {
              key: `1-2-3`,
              name: 'Jim Green',
              age: 42,
              address: 'London No',
              aaaaa: '你好',
              bbbbb: '你好',
              ccccc: '你好',
              ddddd: '你好',
              eeeee: '你好',
              fffff: '你好',
            }
          ]
        }
      ]
    },
    {
      key: `2`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
      children: [
        {
          key: `2-1`,
          name: 'Jim Green',
          age: 42,
          address: 'Sidney No.',
          aaaaa: '你好',
          bbbbb: '你好',
          ccccc: '你好',
          ddddd: '你好',
          eeeee: '你好',
          fffff: '你好',
        },
        {
          key: `2-2`,
          name: 'Jim Green',
          age: 42,
          address: 'Sidney No.',
          aaaaa: '你好',
          bbbbb: '你好',
          ccccc: '你好',
          ddddd: '你好',
          eeeee: '你好',
          fffff: '你好',
        },
        {
          key: `2-3`,
          name: 'Jim Green',
          age: 42,
          address: 'Sidney No.',
          aaaaa: '你好',
          bbbbb: '你好',
          ccccc: '你好',
          ddddd: '你好',
          eeeee: '你好',
          fffff: '你好',
        }
      ]
    },
    {
      key: `3`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `4`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `5`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `6`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `7`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `8`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `9`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `10`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    },
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
    ,
    {
      key: `11`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No.',
      aaaaa: '你好',
      bbbbb: '你好',
      ccccc: '你好',
      ddddd: '你好',
      eeeee: '你好',
      fffff: '你好',
    }
  ];

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

  constructor() { }

  ngOnInit() {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

}
