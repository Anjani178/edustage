import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { MentorSignUpComponent } from '../mentor/mentor-sign-up/mentor-sign-up.component';
import { SignUpComponent } from './sign-up.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,RouterModule.forChild([
      {path:'signUp',component:SignUpComponent,children:[
        {path:'userSignUp',component: UserSignUpComponent},
        {path:'mentorSignUp',component: MentorSignUpComponent}
      ]}
    ])
  ]
})
export class SignUpModule { }
