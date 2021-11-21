import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  @Input() editUserId: number;
  validateForm: FormGroup;
  selectedValue = null;
  userInfo: any;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      mobile: [null],
      statu: [null, [Validators.required]],
    });
  }

  ngOnInit() { this.userInfoById(this.editUserId) }

  submitForm(userInfoVo: UserInfoVo): void {
    userInfoVo.userId = this.editUserId;
    this.updateUser(userInfoVo);
  }

  // 根据Id获取用户信息
  userInfoById(userId: number) {
    this.userService.userInfoById(userId).subscribe((res) => {
      this.userInfo = res.data;
    });
  }

  // 更新用户
  updateUser(userInfoVo: UserInfoVo) {
    this.userService.updateUser(userInfoVo).subscribe((res) => {
      if (res.status === 200) {
        this.updateEmit.emit(true);
      }
    });
  }


  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
