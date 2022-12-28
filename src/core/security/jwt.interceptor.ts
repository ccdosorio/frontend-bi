import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/modules/login/services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoggedIn = this.authenticationService.isLoggedIn;
    const isApiUrl = request.url.startsWith(environment.endpoint);
    const currentToken = this.authenticationService.currentToken;
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + currentToken }
      });
    }
    return next.handle(request);
  }
}
