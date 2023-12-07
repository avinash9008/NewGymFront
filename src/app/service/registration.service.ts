import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from '../customers';
import { Trainer } from '../trainer';
import { throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private http: HttpClient) { }

  public loginUser(user: User):Observable<any>{
     return this.http.post<any>("http://localhost:8080/authenticate", user);
  }

   

// registerCustomer1(customers: Customers): Observable<any>{
//   const headers =  this.createAuthorizationHeader() || new HttpHeaders();
//   console.log(this.authToken);
//   headers.append('Content-Type', 'application/json');
//   const options = { headers: headers };
//   console.log(options);
//   return this.http.post<any>("http://localhost:8080/api/cust/save", customers, options);
//   }

registerCustomer1(customers: Customers): Observable<any> {
  return this.http.post<any>("http://localhost:8080/api/cust/save", customers);
}


  apiUrl = 'http://localhost:8080/api/cust/save';
  authToken = localStorage.getItem('JWT');;// Replace this with your actual token
  
  
 registerCustomer(customers: Customers) {
  
     let headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('JWT')}`)
  return this.http.post(this.apiUrl, customers, {headers}).subscribe((result:any) =>{
  
  });
   }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    console.log(jwtToken);
    if (jwtToken!=null) {
      return new HttpHeaders().set(
        'Authorization', `Bearer ${jwtToken}`
      )
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }
    
  
  }


