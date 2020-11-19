import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = req.headers.append('Authorization', `Bearer xxx`);
    headers = headers.append('RefreshToken', 'token');
    const reqcopy = req.clone({
      headers,
    });
    return next.handle(reqcopy);
  }
}
