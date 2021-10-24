import { MENUKEY, PERMITKEY } from "../model/auth/menu-authoritys";
import { Tokens } from "../model/auth/tokens";

export class StorageUtils {

    static tokens: Tokens = new Tokens();

    /**
     * 从Localstorage中获取指定Key的值
     */
    public static get(key: string): any {
        return localStorage.getItem(key);
    }

    /**
     * 从Localstorage中获取tokens
     */
    public static getTokenAll(): Tokens {
        return this.tokens ? this.tokens : null;
    }

    /**
     * 从Localstorage中获取Token
     */
    public static getTokens(): string {
        this.tokens.token = <string>localStorage.getItem('tokens');
        return this.tokens.token;
    }

    /**
     * 从Localstorage中获取refreshToken
     */
    public static getRefreshTokens(): string {
        this.tokens.refreshToken = <string>localStorage.getItem('tokens');
        return this.tokens.refreshToken;
    }

    /**
     * 从sessionStorage中获取menuList
     */
    public static getMenuList(): any {
        let menuList = JSON.parse(sessionStorage.getItem(MENUKEY));
        return menuList ? menuList : null;
    }

    /**
     * 从sessionStorage中获取PermList
     */
    public static getPermList(): any {
        let permList = JSON.parse(sessionStorage.getItem(PERMITKEY));
        return permList ? permList : null;
    }

}
