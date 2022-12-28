import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // Editar un libro
  updateBook(id: number, body: any) {
    return this.http.put(environment.endpoint + 'books/' + id, body, {});
  }

  // Eliminar un libro
  deleteBook(id: number) {
    return this.http.delete(environment.endpoint + 'books/' + id);
  }
}
