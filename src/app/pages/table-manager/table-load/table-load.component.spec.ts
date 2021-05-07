import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLoadComponent } from './table-load.component';

describe('TableViewComponent', () => {
  let component: TableLoadComponent;
  let fixture: ComponentFixture<TableLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
