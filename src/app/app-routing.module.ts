import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { TrainersComponent } from './pages/trainers/trainers.component';
import { CustomersComponent } from './pages/customers/customers.component';



const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'signup',component: SignupComponent},
   {path:'', redirectTo:'home', pathMatch:'full'},
   {path: 'home', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'dashboard', component:DashboardComponent},
   {path: 'customers', component: CustomersComponent},
   {path: 'trainers', component:TrainersComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }