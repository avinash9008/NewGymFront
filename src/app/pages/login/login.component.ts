import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
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
      data=> {
        console.log(data.jwt);
        if(data!=null)
        {
          const token = data.jwt; // Replace 'your_jwt_token_here' with your actual token
          localStorage.setItem('JWT', token);
        }
        
        this.router.navigate(['/dashboard']);
      },
      
      error=> console.log("error occured")
    )
  }

}
