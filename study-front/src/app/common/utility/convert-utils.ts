import { Menu } from "../model/menu";
import { MenuManage } from "../model/menu-manage";

export class ConvertUtils {

    public static openKeyMap = new Map();
    public static menuConvert(level: number, incept: any[], parents?: number): any[] {

        let menus: any[] = [];
        level++;

        if (level === 1) {
            menus = [
                {
                    level: 1,
                    title: '首页',
                    path: 'index',
                    icon: 'home',
                    open: false,
                    selected: true,
                    disabled: false,
                }
            ];
        }

        for (let i: number = 0; i < incept.length; i++) {
            let menu: Menu = new Menu();

            menu.level = level;
            menu.title = incept[i].title;
            menu.path = incept[i].path;
            menu.icon = incept[i].icon;
            menu.open = false;
            menu.selected = false;
            menu.disabled = false;
            if (parents) {
                menu.parents = parents;
                ConvertUtils.openKeyMap.set(incept[i].path, parents);
            }

            if (incept[i].children && level < 2) {
                menu.children = this.menuConvert(level, incept[i].children, i + 1);
            }
            menus.push(menu);

        }

        return menus;
    }

    public static navConvert(level: number, key: string, element: any[]): MenuManage[] {
        let menus: Array<MenuManage> = new Array<MenuManage>();
        level++;
        for (let i: number = 0; i < element.length; i++) {
            let menuItem: MenuManage = new MenuManage();

            menuItem.level = level;
            if (level === 1) {
                menuItem.key = `${i + 1}`;
            } else {
                menuItem.key = `${key}-${i + 1}`;
            }
            menuItem.menuId = element[i].menuId;
            menuItem.title = element[i].title;
            menuItem.onlyCode = element[i].onlyCode;
            menuItem.path = element[i].path;
            menuItem.component = element[i].component;
            menuItem.icon = element[i].icon;
            menuItem.menuType = element[i].menuType;
            menuItem.orderNum = element[i].orderNum;
            menuItem.state = element[i].state;
            if (element[i].children.length !== 0) {
                menuItem.children = this.navConvert(level, menuItem.key, element[i].children);
            }
            menus.push(menuItem);
        }

        return menus;
    }
}
