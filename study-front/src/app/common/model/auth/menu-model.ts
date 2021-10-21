
export class MenuModel {
    level: number;
    key: string;

    menuId: number;
    title: string;
    onlyCode: string;
    path: string;
    component: string;
    icon: string;
    menuType: number;
    orderNum: number;
    state: number;

    open: boolean;
    selected: boolean;
    disabled: boolean;

    children: Array<MenuModel> = new Array<MenuModel>();
}
