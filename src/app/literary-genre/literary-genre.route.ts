import { Routes } from "@angular/router";

import { LiteraryGenreListComponent } from "./literary-genre-list/literary-genre-list.component";
import { LiteraryGenreFormComponent } from "./literary-genre-form/literary-genre-form.component";
import { LiteraryGenreDetailComponent } from "./literary-genre-detail/literary-genre-detail.component";

export const LITERARY_ROUTES: Routes = [
    {path: '', component: LiteraryGenreListComponent, title:"Gêneros Literários"}, 
    {path: 'new', component: LiteraryGenreFormComponent, title:"Cadastro de Gênero Literário"},
    {path: 'edit/:id', component: LiteraryGenreFormComponent, title:"Edição de Gênero Literário" },
    {path: 'view/:id', component: LiteraryGenreDetailComponent, title:"Visualização de Gênero Literário" } 
]