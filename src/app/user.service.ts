import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserObj} from '../app/user-obj'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _specialEventUrl ="http://localhost:8091/api/userD";
  id;

  constructor(private http:HttpClient,private route:Router){
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventUrl)
  }
  //mvserv1(empid,empname,empsal,addr,num){
    mvserv1(email,password){

     const  e1= new UserObj(email,password)

    this.http.post('http://localhost:8091/api/info',e1).toPromise()
    .then((data:any) => {
      console.log(data)
      if(data.value===422){
        this.route.navigate(['/signUp/userSignUp']);
        
        alert('DUPLICATE EMAIL :-)\n\n')
      }
      else{
      this.route.navigate(['/login']);
      localStorage.setItem('token',data.token)
        alert('SUCCESS!! :-)\n\n')
    }
  });
  }
}
