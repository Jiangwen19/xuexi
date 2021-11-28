import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarManageComponent } from './grammar-manage.component';

describe('GrammarManageComponent', () => {
  let component: GrammarManageComponent;
  let fixture: ComponentFixture<GrammarManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
