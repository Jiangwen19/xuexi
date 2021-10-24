import { Component, OnInit } from '@angular/core';
import { StorageUtils } from 'src/app/common/utility/storage-utils';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.less']
})
export class NewBookComponent implements OnInit {

  constructor() { 
    // console.log('THIS IS BOOK')
    // console.log(StorageUtils.menuAuthoritys.menuList)
    // console.log('THIS IS BOOK')
  }

  ngOnInit() {
  }

}
