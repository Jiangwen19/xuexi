import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleVo } from 'src/app/common/model/vo/role-vo';
import { RoleService } from 'src/app/common/services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.less']
})
export class RoleEditComponent implements OnInit {
  roleInfo: any;
  validateForm: FormGroup;
  @Input() editRoleId: number;
  @Output() updateEmit = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.validateForm = this.fb.group({
      roleName: [null, [Validators.required]],
      symbol: [null, [Validators.required]],
      remark: [null],
      statu: [null, [Validators.required]],
    });
  }

  ngOnInit() { this.getRoleInfo(this.editRoleId) }

  submitForm(roleVo: RoleVo): void {
    roleVo.roleId = this.editRoleId;
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.updateRoleById(roleVo);
  }

  /**
   * 更新角色信息
   * @param roleVo
   */
  updateRoleById(roleVo: RoleVo) {
    this.roleService.roleUpdateById(roleVo).subscribe((res) => {
      if (res.status === 200) {
        this.updateEmit.emit(true);
      }
    })
  }

  /**
   * 获取角色信息
   * @param 
   */
  getRoleInfo(roleId: number) {
    this.roleService.getRoleInfo(roleId).subscribe((res) => {
      this.roleInfo = res.data;
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
