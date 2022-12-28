import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as feather from 'feather-icons';
import { SweetAlertMessage } from 'src/utils/SweetAlertMessage';
import { LibrariesService } from '../../services/libraries.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  loading = false;
  titleAction: string = '';
  title: string = 'librería';
  libraryId: number | undefined;

  formLibrary: FormGroup = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    location: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private librariesService: LibrariesService
  ) { }

  ngOnInit(): void {
    feather.replace();
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.libraryId = Number(params['id']);
        this.titleAction = 'Editar';
        this.getLibrary(Number(params['id']));
      } else {
        this.titleAction = 'Crear';
        this.libraryId = 0;
      }
    });
  }

  onSubmit(): void {
    this.loading = true;

    if (this.libraryId === 0) {
      this.createLibrary();
    } else {
      this.updateLibrary();
    }
  }

  createLibrary(): void {
    this.librariesService.createLibrary(this.formLibrary.value).subscribe({
      next: _ => {
        this.loading = false;
        SweetAlertMessage('success', 'Exitoso', 'Librería creada exitosamente.');
        this.router.navigate(['Home/Libraries/Main']);
      },
      error: error => {
        SweetAlertMessage('error', 'Error', error.error.message);
      }
    });
  }

  updateLibrary(): void {
    this.librariesService.updateLibrary(this.libraryId!, this.formLibrary.value).subscribe({
      next: _ => {
        this.loading = false;
        SweetAlertMessage('success', 'Exitoso', 'Librería editada exitosamente.');
        this.router.navigate(['Home/Libraries/Main']);
      },
      error: error => {
        SweetAlertMessage('error', 'Error', error.error.message);
      }
    });
  }

  getLibrary(id: number): void {
    this.librariesService.getById(id).subscribe({
      next: resp => this.setForm(resp),
      error: error => console.log(error)
    });
  }

  setForm(library: any): void {
    this.formLibrary.get('id')?.setValue(library.id);
    this.formLibrary.get('name')?.setValue(library.name);
    this.formLibrary.get('location')?.setValue(library.location);
  }

}
