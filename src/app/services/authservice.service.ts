import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  constructor(private httpClient: HttpClient) { }

  getUser() {
    //return this.httpClient.get('https://localhost:44305/api/user');
    return this.httpClient.get('/api/user');
  }

  registerUser(data) {
    //return this.httpClient.post('https://localhost:44305/api/user', data);
    return this.httpClient.post('/api/user', data);
  }

  authenticateUser(data){ 
    //return this.httpClient.post('https://localhost:44305/api/user/authenticate', data);
    return this.httpClient.post('/api/user/authenticate', data);
  }

  setLocalStorage(user) {
    localStorage.setItem('jwt_token', user.token);
    localStorage.setItem('role', user.roleName);
  }

  getBearerToken() {
    return localStorage.getItem('jwt_token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  deleteBearerToken() {
    //localStorage.removeItem('jwt_token');
    //localStorage.removeItem('role');
    //localStorage.removeItem('msal.ef4c5495-06f8-4af1-9801-9a24bafc9584.client.info');
    //localStorage.removeItem('msal.ef4c5495-06f8-4af1-9801-9a24bafc9584.idtoken');
    //localStorage.removeItem('{"authority":"https://login.microsoftonline.com/3b9fe888-a28f-4637-8247-e7d730502d46/","clientId":"ef4c5495-06f8-4af1-9801-9a24bafc9584","scopes":"ef4c5495-06f8-4af1-9801-9a24bafc9584","homeAccountIdentifier":"OTczNGFmYTQtYTc4NC00YjM0LThmYTQtNGEzOWRhYmFkMDdh.M2I5ZmU4ODgtYTI4Zi00NjM3LTgyNDctZTdkNzMwNTAyZDQ2"}');
    //localStorage.removeItem('msal.ef4c5495-06f8-4af1-9801-9a24bafc9584.client.info');
    localStorage.clear();
  }

  isUserAuthenticated(token) {
    //return this.httpClient.get('https://localhost:44305/api/user/isAuthenticated',{
    return this.httpClient.get('/api/user/isAuthenticated', {
      headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }
    )
      
  }
}
