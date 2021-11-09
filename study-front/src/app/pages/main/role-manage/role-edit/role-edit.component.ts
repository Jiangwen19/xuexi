import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleVo } from 'src/app/common/model/vo/role-vo';
import { RoleService } from 'src/app/common/services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.less']
})
export class RoleEditComponent implements OnInit {
  validateForm: FormGroup;
  selectedValue = null;

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.validateForm = this.fb.group({
      roleId: [0, [Validators.required]],
      roleName: ['', [Validators.required]],
      symbol: ['', [Validators.required]],
      remark: [''],
      statu: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  submitForm(roleVo: RoleVo): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
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
