import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import {UserModule} from './user/user.module';
import {MentorModule} from './mentor/mentor.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { MentorSignUpComponent } from './mentor/mentor-sign-up/mentor-sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    MentorSignUpComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    MentorModule,
    AdminModule,
    HttpClientModule,
    LoginModule,
    SignUpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
