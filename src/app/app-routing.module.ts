import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { UtCompletedComponent } from './ut-completed/ut-completed.component';
import { SearchComponent } from './search/search.component';
import { SresultsComponent } from './sresults/sresults.component';


const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'utCompleted',component:UtCompletedComponent},
  {path:'sResult',component:SresultsComponent},
  //{path: '**',component:NotFoundcomponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
