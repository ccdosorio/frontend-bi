import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
          this.listBooks = resp;
        }),
        error: _ => this.isEmptyMessage = true
      });
  }

  openDialogBook(): void {
    this.dialogReference = this.dialog.open(CreateBookComponent, {
      width: '500px',
      data: { action: this }
    });
  }
}
