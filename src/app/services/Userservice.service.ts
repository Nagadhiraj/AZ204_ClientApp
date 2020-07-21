import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
//import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
    //private msalService: MsalService
    ) { }

  //loggedInUser: any = this.msalService.getAccount();

  users: Array<User>;
  userId: string;
  username: string;
  email: string;
  phone: string;
  serviceId: string;
  articleId: string;

  getUsers() {
    return this.httpClient.get<Array<User>>(environment.apiUrl+ 'user').pipe( //+ 'Get'
      tap(
        users => {
          this.users = users;
        }),
        catchError(this.handleError)
      
    );
  }

  getUserById(id: string): Observable<User> {
    const url = `${environment.apiUrl + 'user'}/${id}`; //'Get'
    return this.httpClient.get<User>(url)
      .pipe(
        tap(()=> {}),
        catchError(this.handleError)
      );
  }

  saveUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<User>(environment.apiUrl + 'user', user, { headers: headers }) // + 'CreateOrUpdate'
      .pipe(
        tap(()=> {}),
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = environment.apiUrl + 'user'; // + 'CreateOrUpdate';
    return this.httpClient.put<User>(url, user, { headers: headers })
      .pipe(
        map(() => user),
        catchError(this.handleError)
      );
  }

  deleteUser(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrl + 'Delete'}/${id}`;
    return this.httpClient.delete<User>(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

 
