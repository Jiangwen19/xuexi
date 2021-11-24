import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeManageComponent } from './code-manage.component';

describe('CodeManageComponent', () => {
  let component: CodeManageComponent;
  let fixture: ComponentFixture<CodeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
