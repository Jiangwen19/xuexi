import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerManageComponent } from './consumer-manage.component';

describe('ConsumerManageComponent', () => {
  let component: ConsumerManageComponent;
  let fixture: ComponentFixture<ConsumerManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
