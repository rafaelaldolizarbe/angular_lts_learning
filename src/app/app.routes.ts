import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
         // Add your authentication guard here if needed
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'Books',
        canActivate: [authGuard],
    },
    {
        path: 'literary-genre',
        loadChildren: () => import('./literary-genre/literary-genre.route').then(m => m.LITERARY_ROUTES),
        title: 'Literary Genre',
        canActivate: [authGuard] 
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for any unknown routes


];
