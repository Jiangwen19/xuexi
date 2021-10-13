import { Component, OnInit } from '@angular/core';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  userInfo: UserInfoVo = new UserInfoVo();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe((resData) => {
      this.userInfo.username = resData.data.username;
      this.userInfo.picture = resData.data.picture;
    });
  }

  getUserLogout(): void {
    this.userService.getUserLogout().subscribe((resData) => {
      localStorage.clear();
    });
  }

}
