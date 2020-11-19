import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private helperService: HelperService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.helperService.setLoader(true);
    let headers = req.headers.append('Authorization', `Bearer token`);
    const reqCopy = req.clone({
      headers,
      url: `http://localhost:3000/${req.url}`
    });
    return next.handle(reqCopy).pipe(
      finalize(() => {
        this.helperService.setLoader(false);
      })
    );
  }
}
