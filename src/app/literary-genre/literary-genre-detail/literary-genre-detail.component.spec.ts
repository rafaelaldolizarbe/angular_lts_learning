import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenreDetailComponent } from './literary-genre-detail.component';

describe('LiteraryGenreDetailComponent', () => {
  let component: LiteraryGenreDetailComponent;
  let fixture: ComponentFixture<LiteraryGenreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
