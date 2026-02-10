import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenreComponent } from './literary-genre.component';

describe('LiteraryGenreComponent', () => {
  let component: LiteraryGenreComponent;
  let fixture: ComponentFixture<LiteraryGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
