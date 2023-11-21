import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  customers:Customers= new Customers();

  constructor(private service: RegistrationService, private router:Router){}

  registerCustomersData(){
    this.service.registerCustomer(this.customers).subscribe(data=>{
      alert("Customers added successfully");
      this.goToDashBoardPage()
    }, error=> alert("Unable to insert data"));
    
    };

    goToDashBoardPage(){
         this.router.navigate(['/dashboard'])
    }

  }


