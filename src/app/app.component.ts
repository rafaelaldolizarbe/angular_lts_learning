import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
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
}
