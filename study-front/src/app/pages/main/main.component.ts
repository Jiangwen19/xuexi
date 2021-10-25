import { Component, OnInit } from '@angular/core';
import { PostmanService } from 'src/app/common/services/postman.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private postmanService: PostmanService) {
    this.postmanService.loadMain$.emit(true);
  }

  ngOnInit() { }

}
