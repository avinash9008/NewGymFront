import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User= new User()

  constructor(private service: RegistrationService,private router: Router){}

  login(){
    this.service.loginUser(this.user).subscribe(
      data=> console.log(data),
      error=> console.log("error occured")
    )
  }



}
