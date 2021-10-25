import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { ConvertUtils } from 'src/app/common/utility/convert-utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  mode = false;
  dark = false;
  menus: any[];

  constructor(private authService: AuthenticationService) {
    if (this.authService.hasMenu()) {
      let getMenus = this.authService.getMenu();
      this.menus = ConvertUtils.menuConvert(0, getMenus);
    } else {
      this.authService.getMenuAndAuthoritys().subscribe((resMenu) => {
        let getMenus = resMenu.data.nav;
        this.menus = ConvertUtils.menuConvert(0, getMenus);
      })
    }
  }

  ngOnInit() { }

}

