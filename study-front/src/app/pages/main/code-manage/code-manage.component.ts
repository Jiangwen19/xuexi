import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CodeVo } from 'src/app/common/model/vo/code-vo';
import { CodeService } from 'src/app/common/services/code.service';

interface Code {
  codeId: number;
  codeNo: string;
  codeItem: string;
  description: string;
}
@Component({
  selector: 'app-code-manage',
  templateUrl: './code-manage.component.html',
  styleUrls: ['./code-manage.component.less']
})
export class CodeManageComponent implements OnInit {

  isVisible = false;
  listOfData: Code[];
  codeVo: CodeVo = new CodeVo();

  constructor(private codeService: CodeService, private nzMessageService: NzMessageService,) { }
  ngOnInit() { this.getCodeList() }

  /**
   * 获取code一览
   */
  getCodeList() {
    this.codeService.getCodeList().subscribe((res) => {
      this.listOfData = res.data;
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  /**
   * 气泡框取消
   */
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  /**
   * 气泡框确认
   * @param codeId 
   */
  confirm(codeId: number): void {
    this.codeService.deleteCodeById(codeId).subscribe((res) => {
      this.nzMessageService.info(res.msg);
      if (res.status === 200) {
        this.getCodeList();
      }
    })
  }

  /**
   * 确认添加
   */
  handleOk() {
    this.codeService.addCode(this.codeVo).subscribe((res) => {
      if (res.status === 200) {
        this.handleCancel();
        this.getCodeList();
      }
    })
  }

  handleCancel(): void {
    this.isVisible = false;
    for (let key in this.codeVo) {
      delete this.codeVo[key];
    }
  }
}
