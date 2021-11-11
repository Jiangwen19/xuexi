import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-assign',
  templateUrl: './user-assign.component.html',
  styleUrls: ['./user-assign.component.less']
})
export class UserAssignComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  @Input() assignUserId:number
  constructor() { }

  ngOnInit() {
  }

}
