import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseManageComponent } from './phrase-manage.component';

describe('PhraseManageComponent', () => {
  let component: PhraseManageComponent;
  let fixture: ComponentFixture<PhraseManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
