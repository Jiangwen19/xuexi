import { error } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WordDictionaryVO } from 'app/model/word.dictionary.vo';
import { DataService } from 'app/services/data.service';
import { StrigUtil } from 'app/util/string-util';

@Component({
  selector: 'ngx-data-modify',
  templateUrl: './data-modify.component.html',
  styleUrls: ['./data-modify.component.scss']
})
export class DataModifyComponent implements OnInit{

  constructor(private dataService: DataService, private router: Router, private activeRoute: ActivatedRoute) { }
  wordId: number;
  wordDictionaryVO: WordDictionaryVO = new WordDictionaryVO();
  errorMsgs: string[];

  ngOnInit(): void {
    this.errorMsgs = [];
    this.activeRoute.queryParams.subscribe((params: Params) => {
     
        if (params['id'] != null) {
          this.wordId = Number(params['id']);
          this.dataService.selectWordBywordId(this.wordId).subscribe(resData => {
            this.wordDictionaryVO = resData.result;
          });
        }; 
      },
      error => {
        console.log("wordId is null");
      },
    );
  }

  toModify(){
    this.errorMsgs = [];
    if(!StrigUtil.isEmpty(this.wordDictionaryVO.physicalName) && !StrigUtil.isEmpty(this.wordDictionaryVO.wordType)){
      this.dataService.modifyDatas(this.wordDictionaryVO).subscribe(() => {
        this.router.navigate(['/pages/data-view']);
      });
    } else {
      this.errorMsgs.push('データ名と属性を入力しなければなりません');
    }
  }

  toDelete(){
    this.dataService.deleteData(this.wordId).subscribe(() => {
      this.router.navigate(['/pages/data-view']);
    });
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
