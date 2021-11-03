import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzUploadChangeParam } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-dicts-upload',
  templateUrl: './dicts-upload.component.html',
  styleUrls: ['./dicts-upload.component.less']
})
export class DictsUploadComponent implements OnInit {

  constructor(private msg: NzMessageService) { }

  handleChange({ file, fileList }: any): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
  ngOnInit() {
  }

}
