import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LiteraryGenreService {
  constructor(private http: HttpClient) {}

  getAllLiteraryGenres(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/literary-genres`);
  }
}