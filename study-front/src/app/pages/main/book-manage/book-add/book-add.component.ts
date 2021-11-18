import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookVo } from 'src/app/common/model/vo/book-vo';
import { BookService } from 'src/app/common/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.less']
})
export class BookAddComponent implements OnInit {
  @Output() updateEmit = new EventEmitter<number>();
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.validateForm = this.fb.group({
      bookNumber: [null, [Validators.required]],
      bookNameOrignal: [null, [Validators.required]],
      bookNameTranslate: [null],
      description: [null, [Validators.required]],
    });
  }

  ngOnInit() { }

  submitForm(bookVo: BookVo): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.addBook(bookVo);
  }

  // 添加角色
  addBook(bookVo: BookVo) {
    this.bookService.addBook(bookVo).subscribe((res) => {
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
