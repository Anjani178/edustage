import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserObj} from '../app/user-obj'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id;

  constructor(private http:HttpClient,private route:Router){
  }
  //mvserv1(empid,empname,empsal,addr,num){
    mvserv1(email,password){

     const  e1= new UserObj(email,password)

    this.http.post('http://localhost:8091/api/info/',e1).toPromise()
    .then((data:any) => {
      console.log(data)
      if(data.value===422){
        this.route.navigate(['/signUp/userSignUp']);
        
        alert('DUPLICATE EMAIL :-)\n\n')
      }
      else{
      this.route.navigate(['/login']);
        alert('SUCCESS!! :-)\n\n')
    }
  });
  }
}
