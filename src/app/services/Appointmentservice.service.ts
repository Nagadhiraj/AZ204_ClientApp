import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentEntity, AppointmentQuery } from '../models/appointment';
import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) { }

  appointments: Array<AppointmentEntity>;
  app: Array<AppointmentEntity>;

  saveOrFetchAppointment(appointment: AppointmentQuery): Observable<AppointmentEntity[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<AppointmentEntity[]>(environment.apiUrl + 'appointment', appointment, { headers: headers }) // + 'CreateOrUpdate'
      .pipe(
        tap(app => {
          this.app = app;
        }),
        catchError(this.handleError)
      );
  }

  updateAppointment(appointment: AppointmentEntity): Observable<AppointmentEntity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = environment.apiUrl + 'appointment';
    return this.httpClient.put<AppointmentEntity>(url, appointment, { headers: headers })
      .pipe(
        map(() => appointment),
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
