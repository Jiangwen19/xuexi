import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuVo } from 'src/app/common/model/vo/menu-vo';
import { MenuService } from 'src/app/common/services/menu.service';
import { TreeNodeInterface } from '../menu-manage.component';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.less']
})
export class MenuAddComponent implements OnInit {

  validateForm: FormGroup;
  titleArray = Array<[number, string]>();

  selectedValue = null;
  @Input() mapOfExpandedData: { [key: string]: TreeNodeInterface[] };
  @Output() updateEmit = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private menuService: MenuService) {
    this.validateForm = this.fb.group({
      // userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      // email: ['', [Validators.email, Validators.required]],
      parentId: ['', [Validators.required]],
      menuName: ['', [Validators.required]],
      perms: ['', [Validators.required]],
      icon: [''],
      path: [''],
      component: ['', [Validators.required]],
      menuType: [0, [Validators.required]],
      statu: [0, [Validators.required]],
      ordernum: [0, [Validators.required]],
    });
  }

  ngOnInit() {
    this.fetchTitleArray()
  }

  fetchTitleArray() {
    this.titleArray.push([0, '0'])
    for (let item in this.mapOfExpandedData) {
      this.mapOfExpandedData[item].forEach((element) => {
        if (element.level === 0) {
          this.titleArray.push([element.menuId, `${element.title}`])
        } else if (element.level === 1) {
          this.titleArray.push([element.menuId, `\v\v\v${element.title}`])
        }
      })
    }
  }

  submitForm(menuVo: MenuVo): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.addMenu(menuVo);
  }

  // 添加菜单
  addMenu(menuVo: MenuVo) {
    this.menuService.addMenu(menuVo).subscribe(() => {
      this.updateEmit.emit(true);
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
