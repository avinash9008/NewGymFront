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
  searchQuery: string = '';

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

  get filteredCustomers(): any[] {
    if (!this.searchQuery.trim()) {
      // If search query is empty, display all customers
      return this.customers;
    } else {
      // Filter customers based on search query (you can modify this logic as needed)
      return this.customers.filter(customer =>
        customer.firstname.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
 

}
