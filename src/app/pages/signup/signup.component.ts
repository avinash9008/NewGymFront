import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Customers } from 'src/app/customers';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User= new User();
  constructor(private service: RegistrationService, private router:Router){}

  saveCustomers(){
    this.service.signUpUser(this.user).subscribe(
      Response =>{
        alert("User added sucessfully")
        this.router.navigate(['/login']);

        console.log(this.user);
      },
      error =>{
        console.log("Error", error);
      }
    )
    
}

  }


