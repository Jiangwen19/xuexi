import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { PasswordVo } from 'src/app/common/model/vo/password-vo';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { UserService } from 'src/app/common/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  visible = false;
  userInfo: UserInfoVo = new UserInfoVo();
  passwordVo: PasswordVo = new PasswordVo();
  constructor(private router: Router, private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() { this.getUserInfo() }

  getUserInfo(): void {
    this.authService.getUserInfo().subscribe((resData) => {
      this.userInfo.username = resData.data.username;
      this.userInfo.picture = resData.data.picture;
    });
  }

  userLogout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  updatePass() {
    this.userService.updatePass(this.passwordVo).subscribe((res) => {
      if (res.status === 200) { this.visible = false }
    })
  }

  open(): void { this.visible = true }

  close(): void { this.visible = false }
}
