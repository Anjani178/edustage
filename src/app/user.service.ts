import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserObj} from '../app/user-obj'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  id;

  constructor(private http:HttpClient){
  }
  //mvserv1(empid,empname,empsal,addr,num){
    mvserv1(email,password){

     const  e1= new UserObj(email,password)

    this.http.post('http://localhost:8091/api/info/',e1).toPromise()
    .then((data:any) => {
      console.log(data)
    });
  }
}
