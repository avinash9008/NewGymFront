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

  
  public loginUser(user: User):Observable<any>{
     return this.http.post<any>("localhost:8080/authenticate", user);
  }

  registerCustomer(customer: Customers): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("localhost:8080/saveCustomer", customer, { headers });
  }


}
