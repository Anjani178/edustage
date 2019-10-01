import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { MentorDashComponent } from '../mentor-dash/mentor-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDashComponent } from '../user-dash/user-dash.component';



@NgModule({
  declarations: [MentorDashComponent],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,RouterModule.forChild([{
      path:'mentorD',component:MentorDashComponent
    }])
  ]
})
export class MentorModule { }
