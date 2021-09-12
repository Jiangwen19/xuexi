import { Tokens } from "../model/auth/tokens";

export class StorageUtils {
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
        let tokensJson = <string>localStorage.getItem('tokens');
        return tokensJson ? JSON.parse(tokensJson) : null;
    }
}
