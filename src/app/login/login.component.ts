import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environment';// Adjust the path as necessary
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient) {}
  onSubmit() {
    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>(`${environment.apiUrl}/auth/authenticate`, body)
  .subscribe({
    next: (response) => {
      const token = response.access_token;
      localStorage.setItem('access_token', token);
      alert('Login realizado com sucesso!');
      console.log('Response:', response);
    },
    error: (err) => {
      alert('Usuário ou senha inválidos!');
      console.error(err);
    }
  });
  }
}
