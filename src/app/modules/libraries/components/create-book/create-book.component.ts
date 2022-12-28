import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SweetAlertMessage } from 'src/utils/SweetAlertMessage';
import { BookService } from '../../services/book.service';
import { LibrariesService } from '../../services/libraries.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  loading: boolean = false;

  formBook: FormGroup = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    category: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { libraryId: number, book: any, action: any },
    private fb: FormBuilder,
    private librariesService: LibrariesService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    if (this.data.book != null) {
      this.setForm(this.data.book);
    }
  }

  onSubmit(): void {
    this.loading = true;

    const PAYLOAD = {
      ... this.formBook.value,
      libraryId: this.data.libraryId,
      createdAt: new Date().toISOString()
    }

    if (this.data.book === null) {
      this.createBook(PAYLOAD);
    } else {
      this.updateBook(PAYLOAD);
    }
  }

  createBook(body: any): void {
    this.librariesService.createBookToLibrary(this.data.libraryId, body).subscribe({
      next: _ => {
        this.loading = false;
        SweetAlertMessage('success', 'Exitoso', 'Libro agregado con éxito.');
        this.data.action.dialogReference.close();
        this.data.action.getBooks(this.data.libraryId);
      },
      error: error => {
        SweetAlertMessage('error', 'Error', error.error.message);
      }
    });
  }

  updateBook(body: any): void {
    this.bookService.updateBook(this.data.book.id, body).subscribe({
      next: _ => {
        this.loading = false;
        SweetAlertMessage('success', 'Exitoso', 'Libro editado con éxito.');
        this.data.action.dialogReference.close();
        this.data.action.getBooks(this.data.libraryId);
      },
      error: error => {
        SweetAlertMessage('error', 'Error', error.error.message);
      }
    });
  }

  setForm(book: any): void {
    this.formBook.get('id')?.setValue(book.id);
    this.formBook.get('name')?.setValue(book.name);
    this.formBook.get('category')?.setValue(book.category);
  }

}
