import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // Authenticate user
  authenticate(body: any) {
    return this.http.post<any>(environment.endpoint + 'login/authenticate', body, {});
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('token')!);
    return token !== null ? true : false;
  }

  // Returns user auth
  get currentToken() {
    const token = JSON.parse(localStorage.getItem('token')!);
    return token;
  }
}
