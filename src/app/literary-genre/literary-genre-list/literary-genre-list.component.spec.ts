import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenreListComponent } from './literary-genre-list.component';

describe('LiteraryGenreListComponent', () => {
  let component: LiteraryGenreListComponent;
  let fixture: ComponentFixture<LiteraryGenreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
