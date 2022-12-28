import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SweetAlertMessage } from 'src/utils/SweetAlertMessage';
import { SweetDelete } from 'src/utils/SweetDelete';
import { BookService } from '../../services/book.service';
import { LibrariesService } from '../../services/libraries.service';

import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  listBooks: any[] = [];
  libraryId: number | undefined;
  isEmptyMessage: boolean = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private dialogReference: MatDialogRef<any>,
    private bookService: BookService,
    private librariesService: LibrariesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.libraryId = Number(params['id']);
        this.getBooks(Number(params['id']));
      } else {
        this.libraryId = 0;
      }
    });
  }

  getBooks(id: number): void {
    this.librariesService.getBooksLibray(id)
      .subscribe({
        next: (resp => {
          this.isEmptyMessage = false;
          this.listBooks = resp;
        }),
        error: _ => this.isEmptyMessage = true
      });
  }

  openDialogBook(book: any = null): void {
    this.dialogReference = this.dialog.open(CreateBookComponent, {
      width: '500px',
      data: { libraryId: this.libraryId, book: book, action: this }
    });
  }

  deleteBook(id: number): void {
    const title = '¿Seguro que quieres eliminar el libro?';
    const text = 'No se podrá revertir este cambio';

    SweetDelete(title, text).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(id).subscribe({
          next: (_ => {
            SweetAlertMessage('success', 'Exitoso', 'Libro eliminado con éxito.');
            this.getBooks(this.libraryId!);
          }),
          error: (error) => {
            SweetAlertMessage('error', 'Error', error.error.message);
          }
        });
      }
    });
  }
}
