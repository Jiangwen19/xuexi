import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModifyComponent } from './data-modify.component';

describe('DataModifyComponent', () => {
  let component: DataModifyComponent;
  let fixture: ComponentFixture<DataModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
