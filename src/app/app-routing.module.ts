import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:' ',component:AppComponent}
  //{path: '**',component:NotFoundcomponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
