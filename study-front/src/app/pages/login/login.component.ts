import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginVo } from 'src/app/common/model/login.vo';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loginVo: LoginVo = new LoginVo();
  loginForm: String;
  captchaImg: String;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.loginService.captcha().subscribe((resData) => {
      console.log("nnnnnnnn")
      console.log(resData)
    });
  }

  initForm(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verificationCode: [null, [Validators.required]],
      remember: [false]
    });
  }

  submitForm(): void {
    // console.log(this.validateForm.value);
    this.loginVo.userName = this.validateForm.value.userName;
    this.loginVo.password = this.validateForm.value.password;
    this.loginVo.verificationCode = this.validateForm.value.verificationCode;
    this.loginVo.remember = this.validateForm.value.remember;
    this.loginService.userLogin(this.loginVo).subscribe((resData) => {
      this.router.navigate(['/']);
    });
  }

}
