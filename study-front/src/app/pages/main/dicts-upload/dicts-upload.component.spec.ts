import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictsUploadComponent } from './dicts-upload.component';

describe('DictsUploadComponent', () => {
  let component: DictsUploadComponent;
  let fixture: ComponentFixture<DictsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
