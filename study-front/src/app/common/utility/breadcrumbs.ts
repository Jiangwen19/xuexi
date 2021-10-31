import { Params } from "@angular/router";

export interface IBreadcrumb {
    label: string; // 用于显示的path
    params?: Params; // 跳转时所带参数
    url: string; // 跳转的url
}

export class Breadcrumbs {
    public static BREADCRUMBS: Array<IBreadcrumb> = new Array<IBreadcrumb>();

    public static hasbreadcrumb(breadcrumbLast: IBreadcrumb): number {
        for (let i = 0; i < Breadcrumbs.BREADCRUMBS.length; i++) {
            if (Breadcrumbs.BREADCRUMBS[i].label === breadcrumbLast.label) {
                return i;
            }
        }
        return -1;
    }
}


