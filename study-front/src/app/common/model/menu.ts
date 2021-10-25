export class Menu {
    level: number;
    title: string;
    path: string;
    icon: string;
    open: boolean;
    selected: boolean;
    disabled: boolean;
    children?: Menu[];
}
