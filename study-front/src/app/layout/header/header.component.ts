import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  userInfo: UserInfoVo = new UserInfoVo();
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.authService.getUserInfo().subscribe((resData) => {
      this.userInfo.username = resData.data.username;
      this.userInfo.picture = resData.data.picture;
    });
  }

  userLogout(): void {
    this.authService.logout().subscribe((resData) => {
      this.router.navigate(['/login']);
    });
  }

}
