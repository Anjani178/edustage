import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../must-match.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  email;
  password;
  cpassword;
  mv;
  registerForm: FormGroup;
    submitted = false;
  constructor(private mvservice:UserService,private formBuilder: FormBuilder,private route:Router) {   }
  //   sub(){
  //   this.mv=this.mvservice.mvserv1(this.email,this.password);
  //  }
  // ngOnInit() {
  // }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword:['',Validators.required],
        }, {
            validator: MustMatch('password', 'cpassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.mv=this.mvservice.mvserv1(this.email,this.password);
        this.email="";
        this.password="";
        this.cpassword=null;
    }
}

