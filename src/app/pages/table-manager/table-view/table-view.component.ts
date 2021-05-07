import { Component, OnInit } from '@angular/core';
import { TableMasterVO } from 'app/model/table.master.vo';
import { TableService } from 'app/services/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})

export class TableViewComponent implements OnInit {
  upComing: any[] = [];

  searchStr: string;
  tableMasterList: TableMasterVO[];

  constructor(private tableService: TableService,private router : Router) { }

  ngOnInit() {
    this.tableService.searchAllTables().subscribe(resData => {
      this.tableMasterList = resData.result;
      console.log('tableMasterList', this.tableMasterList);
    });
  }


  search() {
    console.log('search', this.searchStr);
  }

  toRegister() {
    this.router.navigate(['pages/table-register']);
  }
}
