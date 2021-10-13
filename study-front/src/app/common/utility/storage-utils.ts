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
}
