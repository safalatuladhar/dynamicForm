import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authenticationService.userValue;
        // const isLoggedIn = user?.accessToken;
        console.log("interceptor");
        console.log('user',user);
        
        if (user?.token) {
        console.log("interceptor if");
          
            request = request.clone({
              
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }                
            });
        }
        console.log(request)

    return next.handle(request);
  }
}
