import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent {

  customer: Customers = {
    id: 0,
    firstname: '',
    lastname: '',
    session: '',
    phone: '',
    joiningDate: '',
    email: '',
    amount: ''
  };

  constructor(private service: RegistrationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const phone = params['phone'];
      if (phone) {
        this.service.getCustomerByPhone(phone).subscribe((customer: Customers) => {
          this.customer = customer;
        });
      }
    });
  }

  onSubmit() {
    // Assuming the 'this.customer' object holds the updated data from the form
    this.service.updateCustomer(this.customer).subscribe(updatedCustomer => {
       
      console.log('Customer updated:', updatedCustomer);
      alert("customer updated sucessfully")
      // Optionally, perform actions after successful update
    }, error => {
      console.error('Error updating customer:', error);
    });
  }
  
  }
 

 

 
  


