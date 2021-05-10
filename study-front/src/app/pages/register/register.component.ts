  
import { Component, OnInit } from '@angular/core';
import { StrigUtil } from 'src/app/common/utility/string-util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userName: String | undefined;
  passWord: String | undefined;
  passwordAgain: String | undefined;

  constructor() { }
  ngOnInit(): void {
    this.userName = '';
    this.passWord = '';
    this.passwordAgain = '';
  }
  isDisabled(): boolean {
    if (!StrigUtil.isEmpty(this.userName) && !StrigUtil.isEmpty(this.passWord) && !StrigUtil.isEmpty(this.passwordAgain)) {
      return false;
    } else {
      return true;
    }
  }

}