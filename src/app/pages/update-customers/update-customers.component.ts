import { Component } from '@angular/core';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent {

  customers: Customers= new Customers();

  constructor(private service: RegistrationService){}

  updateCustomer(phone: string, updatedData: Customers) {

    this.service.updateCustomers(phone, updatedData).subscribe(
      response => {
        console.log("Customer updated:", response);
        alert("Customer Updated");
      },
      error => {
        console.error("Error updating customer:", error);
      }
    );
  }

  deleteCustomers(phone:string){
    this.service.deleteCustomer(phone).subscribe(
      Response =>{
        console.log("customers deleted")
      },
      error =>{
        alert("error")
      }
    )

  }
  
}
