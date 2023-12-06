// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // Get the JWT token from local storage
//     const authToken = localStorage.getItem('JWT');

//     // Clone the request and add the JWT token to the headers if available
//     if (authToken) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });
//     }

//     return next.handle(request);
//   }
//   private isLoginRequest(request: HttpRequest<any>): boolean {
//     // Define your login endpoint(s) here
//     const loginUrls = ['http://localhost:8080/authenticate']; // Replace with your login endpoint(s)
    
//     // Check if the request URL matches any login URL
//     return loginUrls.some((url) => request.url.includes(url));
//   }
// }
