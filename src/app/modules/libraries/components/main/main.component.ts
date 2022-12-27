import { Component, OnInit } from '@angular/core';

import * as feather from 'feather-icons';
import { SweetDelete } from 'src/utils/SweetDelete';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

  delete(): void {
    const title = '¿Seguro que quieres eliminar la librería?';
    const text = 'No se podrá revertir este cambio';

    SweetDelete(title, text).then((result) => {
      if (result.isConfirmed) {
       // service
       console.log('eliminado');
       
      }
    });
    
  }

}
