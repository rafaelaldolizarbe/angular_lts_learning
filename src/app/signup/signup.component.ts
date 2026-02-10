import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // This is necessary for making HTTP requests
import { Router } from '@angular/router';
import { environment } from '../../environment';// Adjust the path as necessary

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  role = 'USER';

  constructor(private http: HttpClient, private router: Router) {}
  goToLogin(){
    this.router.navigate(['/login']);
  }
  onSubmit() {
    const body = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      role: this.role
    };
  
    // Send the registration data to the backend API
    this.http.post<any>(`${environment.apiUrl}/auth/register`, body)
      .subscribe({
        next: () => {
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Erro ao cadastrar usuário!');
          console.error(err);
        }
      });
  }
}
