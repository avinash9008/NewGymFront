import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HeaderComponent } from './pages/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatMenuModule} from '@angular/material/menu'
import { MatIcon, MatIconModule} from '@angular/material/icon'
// import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatNavList} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { CustomersComponent } from './pages/customers/customers.component';
//import {JwtInterceptor} from './util/jwt-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    TrainersComponent,
    CustomersComponent,
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
