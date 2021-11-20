import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonVo } from 'src/app/common/model/vo/lesson-vo';
import { LessonService } from 'src/app/common/services/lesson.service';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.less']
})
export class LessonAddComponent implements OnInit {

  validateForm: FormGroup;
  @Input() editBook: { name: string; bookId: number };
  @Output() updateEmit = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private lessonService: LessonService) {
    this.validateForm = this.fb.group({
      bookName: [{ value: null, disabled: true }, [Validators.required]],
      lessonNumber: [null, [Validators.required]],
      lessonNameOrignal: [null, [Validators.required]],
      lessonNameTranslate: [null],
      description: [null],
    });
  }

  ngOnInit() { }

  submitForm(lessonVo: LessonVo): void {
    lessonVo.bookId = this.editBook.bookId;
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.addLesson(lessonVo);
  }

  // 添加课文
  addLesson(lessonVo: LessonVo) {
    this.lessonService.addLesson(lessonVo).subscribe((res) => {
      this.updateEmit.emit(res.status);
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
