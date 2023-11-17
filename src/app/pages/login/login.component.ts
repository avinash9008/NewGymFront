import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User= new User()

  constructor(private service: RegistrationService){}

  login(){
    this.service.loginUser(this.user).subscribe(
      data=> console.log("response received"),
      error=> console.log("error occured")
    )
  }

}
