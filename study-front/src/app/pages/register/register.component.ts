import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { UserService } from 'src/app/common/services/user.service';
import { StringUtil } from 'src/app/common/utility/string-util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  userInfoVo: UserInfoVo = new UserInfoVo();

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userInfoVo.username = '';
    this.userInfoVo.password = '';
    this.userInfoVo.passwordAgain = '';
  }
  isDisabled(): boolean {
    if (!StringUtil.isEmpty(this.userInfoVo.username) && !StringUtil.isEmpty(this.userInfoVo.password) && !StringUtil.isEmpty(this.userInfoVo.passwordAgain)) {
      return false;
    } else {
      return true;
    }
  }
  userRegister() {
    this.userService.userRegister(this.userInfoVo).subscribe((resData) => {
      this.router.navigate(['/']);
    });
  }

}
