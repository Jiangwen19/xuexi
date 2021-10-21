
export class MenuModel {
    // 菜单标识
    level: number;
    key: string;
    // 后端数据
    menuId: number;
    title: string;
    onlyCode: string;
    path: string;
    component: string;
    icon: string;
    menuType: number;
    orderNum: number;
    state: number;
    // 菜单初始状态
    open: boolean;
    selected: boolean;
    disabled: boolean;
    // 子菜单
    children: Array<MenuModel> = new Array<MenuModel>();
}
