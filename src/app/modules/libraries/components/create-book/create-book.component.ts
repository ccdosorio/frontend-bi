import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrariesService } from '../../services/libraries.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  loading: boolean = false;

  formBook: FormGroup = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: any },
    private fb: FormBuilder,
    private librariesService: LibrariesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    this.data.action.dialogReference.close();
  }

  createBook(): void {

  }

  updateBook(): void {

  }

}
