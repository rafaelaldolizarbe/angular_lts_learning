import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LiteraryGenreService } from '../literary-genre.service';
import { isPlatformBrowser } from '@angular/common';
import { GenreCardComponent } from './genre-card/genre-card.component';

@Component({
  selector: 'app-literary-genre-list',
  standalone: true,
  imports: [GenreCardComponent],
  templateUrl: './literary-genre-list.component.html',
  styleUrl: './literary-genre-list.component.css'
})
export class LiteraryGenreListComponent {
  genres: any[]=[];

constructor(
  @Inject(PLATFORM_ID) private platformId: Object,
  private literaryGenreService: LiteraryGenreService
){}

ngOnInit(){
  if(isPlatformBrowser(this.platformId)){
    this.literaryGenreService.getAllLiteraryGenres()
    .subscribe({
      next: (data) => this.genres = data,
      error: (err) => console.error('Erro ao buscar livros:', err)
    })
  }
}
}
