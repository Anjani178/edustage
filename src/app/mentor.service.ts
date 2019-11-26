import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MentorObj} from '../app/mentor-obj'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mid;

  constructor(private http:HttpClient,private route: Router){
  }
  //mvserv1(empid,empname,empsal,addr,num){
    mserv(email,technologies,facilities,experience,timeStart,timeEnd,url,number,password){

     const  e2= new MentorObj(email,technologies,facilities,experience,timeStart,timeEnd,url,number,password);

     this.http.post('http://localhost:8091/api/info',e2).toPromise()
     .then((data:any) => {
       console.log(data)
       if(data.value===422){
         this.route.navigate(['/signUp/mentorSignUp']);
         
         alert('DUPLICATE EMAIL :-)\n\n')
       }
       else{
        localStorage.setItem('token',data.token)
       this.route.navigate(['/login']);
         alert('SUCCESS!! :-)\n\n')
    }
  });
  }
}
