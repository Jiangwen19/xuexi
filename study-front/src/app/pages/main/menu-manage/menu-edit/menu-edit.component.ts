import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MenuVo } from 'src/app/common/model/vo/menu-vo';
import { MenuService } from 'src/app/common/services/menu.service';
import { StringUtil } from 'src/app/common/utility/string-util';
import { TreeNodeInterface } from '../menu-manage.component';
@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.less']
})
export class MenuEditComponent implements OnInit {

  validateForm: FormGroup;
  titleArray = Array<[number, string]>();

  menu: any;
  selectTop: string;
  selectedValue = null;
  @Input() childMenuId: number;
  @Input() mapOfExpandedData: { [key: string]: TreeNodeInterface[] };
  @Output() updateEmit = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private menuService: MenuService) {
    this.validateForm = this.fb.group({
      frontMenuId: [0, [Validators.required]],
      parentId: ['', [Validators.required]],
      menuName: ['', [Validators.required]],
      perms: ['', [Validators.required]],
      icon: [''],
      path: [''],
      component: [''],
      menuType: [0, [Validators.required]],
      statu: [0, [Validators.required]],
      ordernum: [0, [Validators.required]],
    }, {
      validator: this.menuTypeValidator,
    });
  }

  ngOnInit() {
    this.fetchTitleArray();
  }

  // 将动态菜单放入Map
  fetchTitleArray() {
    this.titleArray.push([0, '0'])
    for (let item in this.mapOfExpandedData) {
      this.mapOfExpandedData[item].forEach((element) => {
        if (element.menuId === this.childMenuId) {
          this.menu = element;

          if (element.parent) {
            this.selectTop = element.parent.title;
          } else {
            this.selectTop = '当前菜单为顶级菜单';
          }
        }

        if (element.level === 0) {
          this.titleArray.push([element.menuId, `${element.title}`])
        } else if (element.level === 1) {
          this.titleArray.push([element.menuId, `\v\v\v${element.title}`])
        }
      })
    }
  }

  // 提交表单
  submitForm(menuVo: MenuVo): void {
    menuVo.frontMenuId = this.menu.menuId;
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.MenuUpdateById(menuVo);
  }

  MenuUpdateById(menuVo: MenuVo) {
    this.menuService.MenuUpdateById(menuVo).subscribe(() => {
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

  /**
   * 关于菜单类型的跨字段的交叉验证
   * @param control 
   * @returns 
   */
  menuTypeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const path = control.get('path');
    const component = control.get('component');
    const menuType = control.get('menuType');
    if (StringUtil.isEmpty(path.value) && menuType.value === 1) {
      return { 'pathMust': { value: true } }
    }
    if (StringUtil.isEmpty(component.value) && menuType.value === 1) {
      return { 'navTypeIsMenu': { value: true } }
    }
    return null;
  }

  // validateConfirmPassword(): void {
  //   setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  // }

  // userNameAsyncValidator = (control: FormControl) =>
  //   new Observable((observer: Observer<ValidationErrors | null>) => {
  //     setTimeout(() => {
  //       if (control.value === 'JasonWood') {
  //         // you have to return `{error: true}` to mark it as an error event
  //         observer.next({ error: true, duplicated: true });
  //       } else {
  //         observer.next(null);
  //       }
  //       observer.complete();
  //     }, 1000);
  //   });

  // confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { error: true, required: true };
  //   } else if (control.value !== this.validateForm.controls.password.value) {
  //     return { confirm: true, error: true };
  //   }
  //   return {};
  // };

}
