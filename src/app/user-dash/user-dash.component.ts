import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  specialEvents = []
  constructor(private route:Router,private myservice:UserService) { }

  ngOnInit() {
    this.myservice.getSpecialEvents()
    .subscribe(
      res => this.specialEvents = res,
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['/login'])
          }
        }
      }
    )

    
  }

}
