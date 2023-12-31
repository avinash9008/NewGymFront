import { Component } from '@angular/core';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  customers : Customers[]=[];

  constructor(private service: RegistrationService){}

  ngOnInit(): void {
    this.getCustomers();
  }



  getCustomers(){
    this.service.getCustomers().subscribe((data:Customers[]) =>{
    this.customers=data;
   },
   error => {
    console.log(error);
   } )
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
