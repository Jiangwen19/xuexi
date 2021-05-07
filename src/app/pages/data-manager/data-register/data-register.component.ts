import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordDictionaryVO } from 'app/model/word.dictionary.vo';
import { DataService } from 'app/services/data.service';
import { StrigUtil } from 'app/util/string-util';
import { truncate } from 'fs';

@Component({
  selector: 'ngx-data-register',
  templateUrl: './data-register.component.html',
  styleUrls: ['./data-register.component.scss']
})
export class DataRegisterComponent implements OnInit {


  constructor(private dataService: DataService,private router : Router) { }
  wordDictionaryVO: WordDictionaryVO = new WordDictionaryVO();
  errorMsgs: string[];
  
  ngOnInit(): void {
    this.errorMsgs = [];
    this.wordDictionaryVO.wordDecimal=null;
    this.wordDictionaryVO.wordLength=null;
  }

  registerDatas(){
    this.errorMsgs = [];
    if(!StrigUtil.isEmpty(this.wordDictionaryVO.physicalName) && !StrigUtil.isEmpty(this.wordDictionaryVO.wordType)){
      this.dataService.registerDatas(this.wordDictionaryVO).subscribe(() => {
        this.router.navigate(['/pages/data-view']);
      });
    } else {
      this.errorMsgs.push('データ名と属性を入力しなければなりません');
    }
  }

  reset(){
    this.wordDictionaryVO.description = '';
    this.wordDictionaryVO.logicName= '';
    this.wordDictionaryVO.physicalName= '';
    this.wordDictionaryVO.wordDecimal=null;
    this.wordDictionaryVO.wordLength=null;
    this.wordDictionaryVO.wordType= '';
  }

  wordLengthDisabledForType(): boolean {
    const wordType = this.wordDictionaryVO.wordType;
    if (wordType==='float'||wordType==='double'||wordType==='int'||wordType==='long'){
      return false;
    }else{
      this.wordDictionaryVO.wordLength=null;
      return true;
    }
  }

  wordDecimalDisabledForType(): boolean {
    const wordType = this.wordDictionaryVO.wordType;
    if (wordType==='float'||wordType==='double'){
      return false;
    }else{
      this.wordDictionaryVO.wordDecimal=null;
      return true;
    }
  }
}
