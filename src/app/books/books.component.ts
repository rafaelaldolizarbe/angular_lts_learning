import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { BooksService } from './books.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { BookcardsComponent } from './bookcards/bookcards.component';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,BookcardsComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private bookService: BooksService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.bookService.getBooksWithWriter()
        .subscribe({
          next: (data) => this.books = data,
          error: (err) => console.error('Erro ao buscar livros:', err)
        });
    }
  }
}
