import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostmanService {

  public loadMain$: EventEmitter<boolean>;
  public loadLogin$: EventEmitter<boolean>;

  constructor() {
    this.loadMain$ = new EventEmitter();
    this.loadLogin$ = new EventEmitter();
  }
}
