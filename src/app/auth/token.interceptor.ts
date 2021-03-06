import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request)
    var token = this.auth.getToken();
    if ((token!=null) && (this.auth.TokenNeeded({url:request.url,method:request.method})))
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
         }
    });

    return next.handle(request);
  }
}