import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonVo } from 'src/app/common/model/vo/lesson-vo';
import { LessonService } from 'src/app/common/services/lesson.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.less']
})
export class LessonEditComponent implements OnInit {

  LessonInfo: any;
  validateForm: FormGroup;
  @Input() editLessonId: number;
  @Output() updateEmit = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private lessonService: LessonService) {
    this.validateForm = this.fb.group({
      lessonNumber: [null, [Validators.required]],
      lessonNameOrignal: [null, [Validators.required]],
      lessonNameTranslate: [null],
      description: [null],
    });
  }

  ngOnInit() { this.getLessonInfo(this.editLessonId) }

  submitForm(lessonVo: LessonVo): void {
    lessonVo.lessonId = this.editLessonId;
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.updateLessonById(lessonVo);
  }

  /**
   * 更新课文信息
   * @param roleVo
   */
  updateLessonById(lessonVo: LessonVo) {
    this.lessonService.lessonUpdateById(lessonVo).subscribe((res) => {
      this.updateEmit.emit(res.status);
    })
  }

  /**
   * 获取课文信息
   * @param 
   */
  getLessonInfo(lessonId: number) {
    this.lessonService.getLessonInfo(lessonId).subscribe((res) => {
      this.LessonInfo = res.data;
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
