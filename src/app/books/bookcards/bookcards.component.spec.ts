import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcardsComponent } from './bookcards.component';

describe('BookcardsComponent', () => {
  let component: BookcardsComponent;
  let fixture: ComponentFixture<BookcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
