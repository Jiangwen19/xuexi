import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: '首页',
      path: 'index',
      icon: 'home',
      open: false,
      selected: true,
      disabled: false,
    },
    {
      level: 1,
      title: '系统管理',
      path: 'new-book',
      icon: 'mail',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: '用户管理',
          path: 'new-book',
          icon: 'bars',
          open: false,
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: '角色管理',
          path: 'new-book',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: '角色管理',
          path: 'new-book',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: '角色管理',
          path: 'new-book',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: '角色管理',
          path: 'new-book',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: '菜单管理',
          path: 'menu-manage',
          icon: 'bars',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: '系统工具',
      path: '/new-book',
      icon: 'notification',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          path: '/new-book',
          title: '数据字典',
          icon: 'user',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          path: '/new-book',
          title: '文件上传',
          icon: 'user',
          selected: false,
          disabled: false
        }
      ]
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }



  // gotoDevicePay(menuPath: String) {
  //   this.router.navigate([`${menuPath}`]);
  // }

}
