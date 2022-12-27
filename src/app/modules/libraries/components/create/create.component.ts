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
    console.log('create');
    console.log(this.formLibrary.value);
    SweetAlertMessage('success', 'Exitoso', 'Librería creada exitosamente.');
    this.router.navigate(['Home/Libraries/Main']);
    

  }

  updateLibrary(): void {
    console.log('edit');
    console.log(this.formLibrary.value);
  }

  getLibrary(id: number): void {

  }

  setForm(): void {

  }

}
