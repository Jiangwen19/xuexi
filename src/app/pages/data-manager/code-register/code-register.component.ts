import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeValueMasterVO } from 'app/model/code.value.master.vo';
import { CodeValueService } from 'app/services/code.value.service';
import { StrigUtil } from 'app/util/string-util';

@Component({
  selector: 'ngx-code-register',
  templateUrl: './code-register.component.html',
  styleUrls: ['./code-register.component.scss']
})
export class CodeRegisterComponent implements OnInit {

  constructor(private codeValueService: CodeValueService, private router: Router, private activeRoute: ActivatedRoute) { }
  codeValueMasterVO : CodeValueMasterVO = new CodeValueMasterVO();
  errorMsgs: string[];

  ngOnInit(): void {
  }

  registerDatas(){
    this.errorMsgs = [];
    if(StrigUtil.isEmpty(this.codeValueMasterVO.codeValue) && !StrigUtil.isEmpty(this.codeValueMasterVO.valuePhysicalName)){
      this.codeValueService.registerCode(this.codeValueMasterVO).subscribe(() => {
        this.router.navigate(['/pages/data-view']);
      });
    } else {
      this.errorMsgs.push('データ名と属性を入力しなければなりません');
    }
  }


}
