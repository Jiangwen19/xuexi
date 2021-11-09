import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-assign',
  templateUrl: './role-assign.component.html',
  styleUrls: ['./role-assign.component.less']
})
export class RoleAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(value: string[]): void {
    console.log(value);
  }
}
