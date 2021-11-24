import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceManageComponent } from './sentence-manage.component';

describe('SentenceManageComponent', () => {
  let component: SentenceManageComponent;
  let fixture: ComponentFixture<SentenceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
