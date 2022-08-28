import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussnessComponent } from './bussness/bussness.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {
    path:'', component:TopheadlineComponent,
  },
  {
    path:'tech', component:TechComponent,
  },
   {
    path:'busi', component:BussnessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
