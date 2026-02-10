import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-literary-genre',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css'
})
export class LiteraryGenreComponent {

}
