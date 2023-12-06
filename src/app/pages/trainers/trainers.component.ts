import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';
import { Trainer } from 'src/app/trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent {

  trainers: Trainer[]=[];

  constructor(private service: RegistrationService){}
 
  
}
