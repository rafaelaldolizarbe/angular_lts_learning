import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre-card.component.html',
  styleUrl: './genre-card.component.css'
})
export class GenreCardComponent {
@Input() genre:any
}
