import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  
  { 
    path: 'dashboard',
    component: DashboardComponent
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'singup',
    component: SingupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
