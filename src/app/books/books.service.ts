import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooksWithWriter(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/books/withwriter`);
  }
}