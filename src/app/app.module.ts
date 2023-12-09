import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HeaderComponent } from './pages/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatMenuModule} from '@angular/material/menu'
import { MatIcon, MatIconModule} from '@angular/material/icon'
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatNavList} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttedanceComponent } from './pages/attedance/attedance.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';
import { TrainerStatusComponent } from './pages/trainer-status/trainer-status.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CommonModule } from '@angular/common';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    AttedanceComponent,
    PaymentComponent,
    PaymentStatusComponent,
    TrainerStatusComponent,
    CustomersComponent,
    UpdateCustomersComponent
    
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
    MatMenuModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
