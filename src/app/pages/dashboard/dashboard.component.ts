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

  // fetchCustomers(): void {
  //   this.service.getCustomers()
  //     .subscribe((data: Customers[]) => {
  //       this.customers = data;
  //     }, error => {
  //       console.error('Error fetching customers:', error);
  //       // Handle error, show error message, etc.
  //     });
  // }

  getCustomers(){
    this.service.getCustomers().subscribe((data:Customers[]) =>{
    this.customers=data;
   },
   error => {
    console.log(error);
   } )
  }

}
