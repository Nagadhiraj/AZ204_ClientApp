import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  constructor(private httpClient: HttpClient) { }

  authenticateUser(data) {
    //return this.httpClient.post('https://localhost:44305/api/authenticateuser', data);
    return this.httpClient.post('/api/authenticateuser', data);
  }
  
}
