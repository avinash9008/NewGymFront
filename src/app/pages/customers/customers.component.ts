import { Component } from '@angular/core';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  customers: Customers = new Customers();
  
  constructor(private service: RegistrationService){}

  public saveCustomer(){
          this.service.addCustomer(this.customers).subscribe(
            Response =>{
              console.log(this.customers);
            }
          )
  }



}
