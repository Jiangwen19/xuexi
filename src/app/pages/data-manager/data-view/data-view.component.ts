import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordDictionaryVO } from 'app/model/word.dictionary.vo';
import { DataService } from 'app/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataDetailComponent implements OnInit {

  upComing: any[] = [];

  searchString = '';
  option = 'option1';



  WordDictionaryList: WordDictionaryVO[];

  constructor(private dataService: DataService,private router : Router) { }

  ngOnInit() {
    this.search();
  }


  search() {
    const searchParameter = {
      queryOption: this.option,
      keyWord: this.searchString
    };
    this.dataService.searchDatas(searchParameter).subscribe(resData => {
      this.WordDictionaryList = resData.result;
      console.log('WordDictionaryList', this.WordDictionaryList);
    });
  }

  toRegister() {
    this.router.navigate(['pages/data-register']);
  }

  toModify(key:any) {
    this.router.navigate(['pages/data-modify'],{queryParams:{id:key}});
  }
}

