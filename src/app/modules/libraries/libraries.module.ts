import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './components/main/main.component';
import { LibrariesRoutingModule } from './libraries-routing.module';
import { CreateComponent } from './components/create/create.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    MainComponent,
    CreateComponent,
    ListBooksComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class LibrariesModule { }
