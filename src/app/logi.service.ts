import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogiService {
  constructor(private http:HttpClient,private route:Router) { }
  login1(email,password) {
    const  l1= new Login(email,password);
    this.http.post('http://localhost:8091/api/login',l1).toPromise()
    .then((data:any)=>{
      console.log(data);
      if(data.message === "Success!"){
        if(data.roles ==="Mentor"){
        this.route.navigate(['/mentorD']); 
        localStorage.setItem('token',data.token)
        localStorage.setItem('login','yes')
        localStorage.setItem('role',data.roles)
        }
        else if(data.roles ==="User"){
          this.route.navigate(['/userD']);
          localStorage.setItem('token',data.token)
          localStorage.setItem('login','yes')
          localStorage.setItem('role',data.roles)
        }
      }
      else{
        this.route.navigate(['/login']);
        alert( data.message +'\n\n');  
      }
    });
}
isMentor(){
  if(localStorage.getItem('role') ==="Mentor"){
    return true;
  }
  else
  {
    return false;
  }

}
isLogin(){
  if(localStorage.getItem('login')==="yes"){
    return true;
  }
  else{
    return false;
  }
}
loggedIn(){
  return !!localStorage.getItem('token');
}
logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  localStorage.removeItem('login')
  this.route.navigate(['/login'])
}
getToken(){
  return localStorage.getItem('token')
}
}
