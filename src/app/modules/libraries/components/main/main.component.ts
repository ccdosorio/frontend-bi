import { Component, OnInit } from '@angular/core';

import * as feather from 'feather-icons';
import { SweetDelete } from 'src/utils/SweetDelete';
import { LibrariesService } from '../../services/libraries.service';
import { SweetAlertMessage } from '../../../../../utils/SweetAlertMessage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listLibraries: any[] = [];

  constructor(
    private librariesService: LibrariesService
  ) { }

  ngOnInit(): void {
    feather.replace();
    this.getAll();
  }

  getAll(): void {
    this.librariesService.getAll()
      .subscribe({
        next: (resp => {
          this.listLibraries = resp;
        }),
        error: (error) => {
          console.log(error);
        }
      });
  }

  delete(id: number): void {
    const title = '¿Seguro que quieres eliminar la librería?';
    const text = 'No se podrá revertir este cambio';

    SweetDelete(title, text).then((result) => {
      if (result.isConfirmed) {
        this.librariesService.deleteLibrary(id).subscribe({
          next: (_ => {
            SweetAlertMessage('success', 'Exitoso', 'Librería eliminada con éxito.');
            this.getAll();
          }),
          error: (error) => {
            SweetAlertMessage('error', 'Error', error.error.message);
          }
        });
      }
    });
  }
}
