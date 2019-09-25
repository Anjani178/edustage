import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MentorObj} from '../app/mentor-obj'

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mid;

  constructor(private http:HttpClient){
  }
  //mvserv1(empid,empname,empsal,addr,num){
    mserv(email,password,technologies,facilities,experience,timeStart,timeEnd,url,number){

     const  e2= new MentorObj(email,password,technologies,facilities,experience,timeStart,timeEnd,url,number);

    this.http.post('http://localhost:8091/api/info/',e2).toPromise()
    .then((data:any) => {
      console.log(data)
    });
  }
}
