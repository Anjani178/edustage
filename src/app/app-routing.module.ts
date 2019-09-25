import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MentorSignUpComponent } from './mentor/mentor-sign-up/mentor-sign-up.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';


const routes: Routes = [
  {path:' ',component:AppComponent}
  //{path: '**',component:NotFoundcomponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
