import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenreFormComponent } from './literary-genre-form.component';

describe('LiteraryGenreFormComponent', () => {
  let component: LiteraryGenreFormComponent;
  let fixture: ComponentFixture<LiteraryGenreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenreFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
