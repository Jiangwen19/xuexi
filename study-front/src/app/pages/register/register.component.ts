import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserInfoVo } from 'src/app/common/model/user.info.vo';
import { UserService } from 'src/app/common/services/user.service';
import { StrigUtil } from 'src/app/common/utility/string-util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  userInfoVo: UserInfoVo = new UserInfoVo();

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userInfoVo.userName = '';
    this.userInfoVo.password = '';
    this.userInfoVo.passwordAgain = '';
  }
  isDisabled(): boolean {
    if (!StrigUtil.isEmpty(this.userInfoVo.userName) && !StrigUtil.isEmpty(this.userInfoVo.password) && !StrigUtil.isEmpty(this.userInfoVo.passwordAgain)) {
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
