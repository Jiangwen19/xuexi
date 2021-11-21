import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookVo } from 'src/app/common/model/vo/book-vo';
import { BookService } from 'src/app/common/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.less']
})
export class BookEditComponent implements OnInit {

  bookInfo: any;
  validateForm: FormGroup;
  @Input() editBookId: number;
  @Output() updateEmit = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.validateForm = this.fb.group({
      bookNumber: [null, [Validators.required]],
      bookNameOrignal: [null, [Validators.required]],
      bookNameTranslate: [null],
      description: [null],
    });
  }

  ngOnInit() { this.getBookInfo(this.editBookId) }

  getBookInfo(bookId: number) {
    this.bookService.getBookInfo(bookId).subscribe((res) => {
      this.bookInfo = res.data;
    })
  }

  submitForm(bookVo: BookVo): void {
    bookVo.bookId = this.editBookId;
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    this.updateBookById(bookVo);
  }

  updateBookById(bookVo: BookVo) {
    this.bookService.bookUpdateById(bookVo).subscribe((res) => {
      this.updateEmit.emit(res.status);
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
