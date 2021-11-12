import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoVo } from 'src/app/common/model/auth/user.info.vo';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.less']
})
export class UserAddComponent implements OnInit {
  @Output() updateEmit = new EventEmitter<boolean>();
  validateForm: FormGroup;
  selectedValue = null;

  constructor(private fb: FormBuilder, private roleService: UserService) {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mobile: [''],
      statu: [0, [Validators.required]],
    });
  }

  ngOnInit() { }

  submitForm(userInfoVo: UserInfoVo): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.addUser(userInfoVo);
  }

  // 添加用户
  addUser(userInfoVo: UserInfoVo) {
    this.roleService.addUser(userInfoVo).subscribe(() => {
      this.updateEmit.emit(true);
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
