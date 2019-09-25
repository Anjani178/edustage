import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/mentor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
  email;
  password;
  technologies;
  facilities;
  experience;
  timeStart;
  timeEnd;
  url;
  number;
  m;
  constructor(private mservice:MentorService, private route: ActivatedRoute) { }
  sub1(){
    this.m=this.mservice.mserv(this.email,this.password,this.technologies,this.facilities,this.experience,this.timeStart,this.timeEnd,this.url,this.number);
  }
  ngOnInit() {
  }

}
