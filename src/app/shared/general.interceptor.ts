import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const modifiedRequest = req.clone({
    //     headers: req.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/')
    //   }
    // );

    // console.log('from interceptor');
    return next.handle(req);
  }
}
