import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanComponent } from './jan/jan.component';
import { FebComponent } from './feb/feb.component';
import { AprComponent } from './apr/apr.component';
import { MarComponent } from './mar/mar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'jan',component:JanComponent
  },{
    path: 'feb',component:FebComponent
  },{
    path: 'mar',component:MarComponent
  },
  {
  path: 'apr',component:AprComponent
  },
  {
    path: '',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path: 'stat',component:StatComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
