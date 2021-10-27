import { Menu } from "../model/menu";
import { MenuManage } from "../model/menu-manage";

export class ConvertUtils {
    public static menuConvert(level: number, incept: any[]): any[] {

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

        for (let item of incept) {
            let menu: Menu = new Menu();

            menu.level = level;
            menu.title = item.title;
            menu.path = item.path;
            menu.icon = item.icon;
            menu.open = false;
            menu.selected = false;
            menu.disabled = false;

            if (item.children && level < 2) {
                menu.children = this.menuConvert(level, item.children);
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
