import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from '../customers';
import { CustomersComponent } from '../pages/customers/customers.component';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  

  private apiUrl = 'http://localhost:8080/api/cust'; // Replace this with your API URL
  


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
   getCustomerByPhone(phone: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/cust/getPhone/${phone}`);
    
  }

  updateCustomersByPhone(phone: string, updateData: Customers): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/cust/update/${phone}`, updateData);
  }
  deleteCustomer(phone:string):Observable<Customers>{
    return this.http.delete<Customers>(`http://localhost:8080/api/cust/delete/${phone}`)
  }

  updateCustomer(customer: Customers): Observable<Customers> {
     // Modify this to match your API endpoint for updating customers
    return this.http.put<Customers>(`${this.apiUrl}/update/${customer.phone}`, customer);
  }

}
  