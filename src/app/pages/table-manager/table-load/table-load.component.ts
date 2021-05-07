import { Component, OnInit } from '@angular/core';
import { TableMasterVO } from 'app/model/table.master.vo';
import { TableService } from 'app/services/table.service';

@Component({
  selector: 'app-table-load',
  templateUrl: './table-load.component.html',
  styleUrls: ['./table-load.component.scss']
})

export class TableLoadComponent implements OnInit {
  upComing: any[] = [];

  searchStr: string;
  tableMasterList: TableMasterVO[];

  constructor(private tableService: TableService,) { }

  ngOnInit() {
    // this.tableService.searchAllTables().subscribe(resData => {
    //   this.tableMasterList = resData.result;
    //   console.log('tableMasterList', this.tableMasterList);
    // });
  }


  search() {
    console.log('search', this.searchStr);
  }

  onChangeFile(event) {
    const file: File = event.target.files[0];
    console.log(file);

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.tableService.upload(formData).subscribe(data => {
      console.log(data);
    });
  }

}
