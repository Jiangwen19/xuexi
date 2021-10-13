import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public logoutOk$: EventEmitter<boolean>;

  userInfo: UserInfoVo = new UserInfoVo();
  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) {
    this.logoutOk$ = new EventEmitter();
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe((resData) => {
      this.userInfo.username = resData.data.username;
      this.userInfo.picture = resData.data.picture;
    });
  }

  userLogout(): void {
    this.authService.logout().subscribe((resData) => {
      this.router.navigate(['/login'])
    });
  }

}
