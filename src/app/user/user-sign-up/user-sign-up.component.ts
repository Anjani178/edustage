import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  email;
  password;
  mv;
  constructor(private mvservice:UserService, private route: ActivatedRoute) {   }
  sub(){
    this.mv=this.mvservice.mvserv1(this.email,this.password);
  }
  ngOnInit() {
  }

}
