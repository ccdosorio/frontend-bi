import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  constructor(private http: HttpClient) { }

  // Obtener las librerías
  getAll() {
    return this.http.get<any[]>(environment.endpoint + 'libraries');
  }

  // Obtener una librería por su id
  getById(id: number) {
    return this.http.get<any>(environment.endpoint + 'libraries/' + id);
  }

  // Obtener los libros de la librería
  getBooksLibray(id: number) {
    return this.http.get<any[]>(environment.endpoint + 'libraries/' + id + '/books');
  }

  // Crear una librería
  createLibrary(body: any) {
    return this.http.post(environment.endpoint + 'libraries', body, {});
  }

  // Editar una librería
  updateLibrary(id: number, body: any) {
    return this.http.put(environment.endpoint + 'libraries/' + id, body, {});
  }

  // Eliminar una librería
  deleteLibrary(id: number) {
    return this.http.delete(environment.endpoint + 'libraries/' + id);
  }
}
