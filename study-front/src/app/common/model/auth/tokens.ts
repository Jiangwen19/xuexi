/**前端存储的tokens的key */
export const TOKENS = 'tokens';
/**
 * Tokens
 */
export class Tokens {
    // token
    token: string;
    // refreshToken 使用此Token再生成新的成对Token Auto Refresh
    refreshToken: string;
}
