import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInquireComponent } from './book-inquire.component';

describe('BookInquireComponent', () => {
  let component: BookInquireComponent;
  let fixture: ComponentFixture<BookInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
