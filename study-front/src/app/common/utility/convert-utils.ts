import { Menu } from "../model/menu";

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

            if (incept[i].children.length !== 0 && level < 2) {
                menu.children = this.menuConvert(level, incept[i].children, i + 1);
            }
            menus.push(menu);

        }

        return menus;
    }

}
