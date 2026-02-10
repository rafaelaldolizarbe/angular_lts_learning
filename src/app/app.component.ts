import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient, private router: Router) {}
  title = 'angular-standalone-login';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
      }
    }
  }

  toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode').toString());
    }
  }
  onLogout() {
    this.http.post<any>(`${environment.apiUrl}/auth/logout`, {})
    // Clear the local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // Optionally, navigate to the login page or home page
    this.router.navigate(['/login']);
    alert('Logout realizado com sucesso!');
  }
}
