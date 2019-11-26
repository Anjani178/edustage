import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/mentor.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/must-match.validator';

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
  cpassword;
  m;
  registerForm1: FormGroup;
    submitted = false;
  constructor(private mservice:MentorService, private route: ActivatedRoute, private formBuilder:FormBuilder) { }
  ngOnInit() {
    this.registerForm1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      technologies:['',Validators.required],
      facilities:['',Validators.required],
      experience:['',Validators.required],
      timeStart:['',Validators.required,Validators.pattern('[0-9]+')],
      timeEnd:['',Validators.required,Validators.pattern('[0-9]+')],
      url:['',Validators.required],
      number:['',Validators.required,Validators.pattern('[0-9]+')],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword:['',Validators.required],
  }, {
      validator: MustMatch('password', 'cpassword')
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm1.controls; }

onSubmit() {
  this.submitted = true;

  // // stop here if form is invalid
  if (this.registerForm1.invalid) {
      return;
  }
  this.m=this.mservice.mserv(this.email,this.technologies,this.facilities,this.experience,this.timeStart,this.timeEnd,this.url,this.number,this.password);
  this.email="";
  this.technologies="";
  this.facilities="";
  this.experience="";
  this.timeStart="";
  this.timeEnd="";
  this.url="";
  this.number="";
  this.password="";
  this.cpassword="";
}
  }
