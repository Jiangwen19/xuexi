import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    this.authService.loadMain$.emit(true);
  }

  ngOnInit() { }

}
