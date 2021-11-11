export class UserInfoVo {
  // 用户Id
  userId: number;
  // 用户名
  username: string;
  // 密码
  password: string;
  // 再次输入密码
  passwordAgain: string;
  // 旧密码
  currentPass: string;
  // 图片验证码
  verificationCode: string;
  // 用户邮箱
  email: string;
  // 手机号
  mobile: string;
  // 验证码的key
  codeToken: string;
  // 用户状态
  statu: number;
  // 用户头像
  picture: string;
}