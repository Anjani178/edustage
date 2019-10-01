import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogiService } from '../logi.service';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  loginForm: FormGroup;
  l;
  constructor(private lservice:LogiService,private formBuilder: FormBuilder,private route:Router) { }
  log1(){
    this.l=this.lservice.login1(this.email,this.password)
    this.email="";
    this.password=""
    
    // this.route.navigate(['/signUp']);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

}
