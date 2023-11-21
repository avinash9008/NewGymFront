import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  
  public loginUser(user: User):Observable<any>{
     return this.http.post<any>("localhost:8080/authenticate", user);
  }
}
