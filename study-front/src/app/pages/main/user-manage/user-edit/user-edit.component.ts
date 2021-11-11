import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  @Output() updateEmit = new EventEmitter<boolean>();
  @Input() editUserId: number
  constructor() { }

  ngOnInit() {
  }

}
