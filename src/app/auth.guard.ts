import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { LogiService } from './logi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  _authservice;
  
  constructor(private myservice: LogiService, private route: Router){}
  canActivate(): boolean{
    if(this.myservice.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['/login'])
      return false
    }
  }
  
}
