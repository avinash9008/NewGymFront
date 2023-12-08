import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from '../customers';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public signUpUser(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/register/sign-up",user);
  }
  
  public loginUser(user: User):Observable<any>{
     return this.http.post<any>("localhost:8080/authenticate", user);
  }

  addCustomer(customer: Customers): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/cust/save", customer);
  }
  
  getCustomers(): Observable<Customers[]>{
    return this.http.get<Customers[]>("http://localhost:8080/api/cust/get");
  }

}
