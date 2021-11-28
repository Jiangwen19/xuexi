import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordManageComponent } from './word-manage.component';

describe('WordManageComponent', () => {
  let component: WordManageComponent;
  let fixture: ComponentFixture<WordManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
