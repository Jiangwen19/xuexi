import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceDetailComponent } from './sentence-detail.component';

describe('SentenceDetailComponent', () => {
  let component: SentenceDetailComponent;
  let fixture: ComponentFixture<SentenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
