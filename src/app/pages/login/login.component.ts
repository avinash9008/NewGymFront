import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User= new User()

  constructor(private service: RegistrationService){}

  saveUser(){
    this.service.loginUser(this.user).subscribe(
      Response =>{
        alert("User added sucessfully")
        console.log(this.user);
      },
      error =>{
        alert("Error Occured")
      }
    )
    
}
}
