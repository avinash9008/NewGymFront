import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { Customers } from 'src/app/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  customers:Customers= new Customers();

  constructor(private service: RegistrationService, private router:Router){}


registerCustomersData(){
    this.service.registerCustomer1(this.customers).subscribe((res:any)=>{
      console.log(res);
      alert("Customers added successfully");
      this.goToDashBoardPage()
    }, error=> alert("Unable to insert data"));

    this.router.navigate(['/login'])
    
    };

    goToDashBoardPage(){
         this.router.navigate(['/dashboard'])
    }

}
