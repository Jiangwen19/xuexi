import { MenuAuthoritys, MENUAUTHS } from "../model/auth/menu-authoritys";
import { Tokens } from "../model/auth/tokens";

export class StorageUtils {

    static tokens: Tokens = new Tokens();
    static menuAuthoritys: MenuAuthoritys = new MenuAuthoritys();
    /**
     * 从Localstorage中获取指定Key的值
     */
    public static get(key: string): any {
        return localStorage.getItem(key);
    }
    /**
     * 从Localstorage中获取Tokens
     */
    public static getTokens(): Tokens {
        this.tokens.token = <string>localStorage.getItem('tokens');
        return this.tokens ? this.tokens : null;
    }
    /**
     * 从Localstorage中获取refreshToken
     */
    public static getRefreshTokens(): Tokens {
        this.tokens.refreshToken = <string>localStorage.getItem('tokens');
        return this.tokens ? this.tokens : null;
    }
    /**
     * 将菜单列表存储到全局变量中
     */
    public static setMenuList(menuList: any[]) {
        this.menuAuthoritys.menuList = menuList;
        console.log(this.menuAuthoritys.menuList)
    }
    /**
     * 将限权存储到全局变量中
     */
    public static setPermList(authoritys: any[]) {
        this.menuAuthoritys.permList = authoritys;
    }
    /**
     * 修改路由缓存状态
     */
    public static changeRouteStatus(hasRoute: boolean) {
        this.menuAuthoritys.hasRoute = hasRoute;
        sessionStorage.setItem(MENUAUTHS, JSON.stringify(hasRoute));
    }
}
