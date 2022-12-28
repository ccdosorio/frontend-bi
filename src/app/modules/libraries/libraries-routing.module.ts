import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/core/security/auth.guard';
import { CreateComponent } from './components/create/create.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Main' },
  { path: 'Main', component: MainComponent, canActivate: [AuthGuard]  },
  { path: 'Create', component: CreateComponent, canActivate: [AuthGuard]  },
  { path: 'Edit/:id', component: CreateComponent, canActivate: [AuthGuard]  },
  { path: 'Books/:id', component: ListBooksComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
