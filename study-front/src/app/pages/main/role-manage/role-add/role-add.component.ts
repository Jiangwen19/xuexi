import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleVo } from 'src/app/common/model/vo/role-vo';
import { RoleService } from 'src/app/common/services/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.less']
})
export class RoleAddComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  validateForm: FormGroup;
  selectedValue = null;

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.validateForm = this.fb.group({
      roleName: ['', [Validators.required]],
      symbol: ['', [Validators.required]],
      remark: [''],
      statu: [0, [Validators.required]],
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
    this.addRole(roleVo);
  }

  addRole(roleVo: RoleVo) {
    this.roleService.addRole(roleVo).subscribe(() => {
      this.updateEmit.emit(true)
    })
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
