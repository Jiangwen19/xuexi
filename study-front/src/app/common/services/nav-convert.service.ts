import { Injectable } from '@angular/core';
import { MenuModel } from '../model/auth/menu-model';

@Injectable({
  providedIn: 'root'
})
export class NavConvertService {
  level: number = 0;
  key: string = '';
  constructor() { }

  getMenus(resNav: any[]): MenuModel[] {
    return this.navConvert(this.level, this.key, resNav)
  }

  navConvert(level: number, key: string, element: any[]): MenuModel[] {
    let menus: Array<MenuModel> = new Array<MenuModel>();
    level++;
    for (let i: number = 0; i < element.length; i++) {
      let menuModel: MenuModel = new MenuModel();

      menuModel.level = level;
      if (level === 1) {
        menuModel.key = `\`${i + 1}\``;
      } else {
        menuModel.key = `${key.substring(0, key.length - 1)}-${i + 1}\``;
      }
      menuModel.menuId = element[i].menuId;
      menuModel.title = element[i].title;
      menuModel.onlyCode = element[i].onlyCode;
      menuModel.path = element[i].path;
      menuModel.component = element[i].component;
      menuModel.icon = element[i].icon;
      menuModel.menuType = element[i].menuType;
      menuModel.orderNum = element[i].orderNum;
      menuModel.state = element[i].state;

      menuModel.open = false;
      menuModel.selected = false;
      menuModel.disabled = false;
      if (element[i].children) {
        menuModel.children = this.navConvert(level, menuModel.key, element[i].children);
      }
      menus.push(menuModel);
    }

    return menus;
  }
}
