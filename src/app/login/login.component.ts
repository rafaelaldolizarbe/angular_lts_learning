import { HttpClient } from '@angular/common/http'; // This is necessary for making HTTP requests
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private http: HttpClient, private router: Router) {}
  
  onSubmit() {
    const body = {
      email: this.email,
      password: this.password
    };
    this.http.post<any>(`${environment.apiUrl}/auth/authenticate`, body)
  .subscribe({
    next: (response) => {
      const token = response.access_token;
      const refreshToken = response.refresh_token;
      localStorage.setItem('access_token', token);
      localStorage.setItem('refresh_token', refreshToken);
      this.router.navigate(['/books']);
      alert('Login realizado com sucesso!');
      // console.log('Response:', response);
    },
    error: (err) => {
      alert('Usuário ou senha inválidos!');
      console.error(err);
    }
  });
  
  }
  goToSignup() {
    // Navigate to the signup page
    this.router.navigate(['/signup']);
  }
  
}
