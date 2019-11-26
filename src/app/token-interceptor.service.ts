import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserObj } from './user-obj';
import { LogiService } from './logi.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }
  intercept(req,next){
    let myservice = this.inject.get(LogiService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization:`Bearer ${myservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
