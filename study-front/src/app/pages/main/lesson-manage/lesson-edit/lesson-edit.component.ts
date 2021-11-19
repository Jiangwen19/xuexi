import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.less']
})
export class LessonEditComponent implements OnInit {

  @Input() editLessonId: number;
  @Output() updateEmit = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
