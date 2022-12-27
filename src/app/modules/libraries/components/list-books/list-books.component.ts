import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../../services/book.service';
import { LibrariesService } from '../../services/libraries.service';

import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private dialogReference: MatDialogRef<any>,
    private bookService: BookService,
    private librariesService: LibrariesService
  ) { }

  ngOnInit(): void {
  }

  getBooks(): void {

  }

  openDialogBook(): void {
    this.dialogReference = this.dialog.open(CreateBookComponent, {
      width: '500px',
      data: { action: this }
    });
  }

}
