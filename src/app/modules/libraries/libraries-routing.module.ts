import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListBooksComponent } from './components/list-books/list-books.component';

import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Main' },
  { path: 'Main', component: MainComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Edit/:id', component: CreateComponent },
  { path: 'Books/:id', component: ListBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
