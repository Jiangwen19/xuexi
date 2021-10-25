
export class MenuManage {
    // 菜单标识:‘1-1-2’
    key: string;
    level?: number;
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
    // 子菜单
    children: Array<MenuManage>;
}
