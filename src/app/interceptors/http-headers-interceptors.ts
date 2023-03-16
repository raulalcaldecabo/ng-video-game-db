import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observablethrowError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor () {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ 
      setHeaders: { },
      setParams: {
        key: 'af1290ee97e54ed5a164f6c04d120bc7',
      }
    })
    return next.handle(req);
  }
}
