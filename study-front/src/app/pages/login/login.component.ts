import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from 'src/app/common/guard/auth-guard';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { PostmanService } from 'src/app/common/services/postman.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  userInfo: UserInfoVo = new UserInfoVo();
  captchaImg: String;
  returnUrl: string = '/main';
  isLoading: boolean = true;
  err = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService, private postmanService: PostmanService,
    private authGuard: AuthGuard) {
    this.authGuard.routerStateSnapshot$.subscribe((state: RouterStateSnapshot) => {
      // 赋值给跳转URL
      this.returnUrl = state.url || '/main';
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.refreshCode();
  }

  initForm(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verificationCode: [null, [Validators.required]],
      remember: [false]
    });
  }

  submitForm(): void {
    // 防止重复点击
    let submitted = false;
    // stop here if form is invalid
    if (this.validateForm.invalid || submitted) {
      return;
    }
    this.clear();
    submitted = true;
    // 构建User对象
    this.userInfo.username = this.validateForm.value.username;
    this.userInfo.password = this.validateForm.value.password;
    this.userInfo.verificationCode = this.validateForm.value.verificationCode;

    this.authService.login(this.userInfo)
      .subscribe(
        data => {
          if (data && data.status === 400) {
            this.err = '用户名或密码不正确';
          } else {
            this.err = '验证码不正确';
          }
          this.router.navigate([this.returnUrl]);
        }, () => {
          submitted = false;
        }
      );
  }
  refreshCode(): void {
    this.authService.captcha().subscribe((resData) => {
      if (resData) {
        this.captchaImg = resData.data.captchaImg;
        this.userInfo.codeToken = resData.data.token;
      }
      this.isLoading = false;
    }, error => {
      console.log(error);
    });
  }

  // isLogout(): boolean {
  //   if (this.postmanService.isLogout === true) {
  //     this.postmanService.isLogout = false;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  private clear() {
    this.err = '';
  }

}
