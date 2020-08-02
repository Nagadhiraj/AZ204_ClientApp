import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChartEntity, ChartQuery } from '../models/chart';
import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private httpClient: HttpClient) { }

  charts: Array<ChartEntity>;
  chart: Array<ChartEntity>;

  saveOrFetchChart(chart: ChartQuery): Observable<ChartEntity[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<ChartEntity[]>(environment.apiUrl + 'chart', chart, { headers: headers }) // + 'CreateOrUpdate'
      .pipe(
        tap(chart => {
          this.chart = chart;
        }),
        catchError(this.handleError)
      );
  }

  updateChart(chart: ChartEntity): Observable<ChartEntity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = environment.apiUrl + 'chart';
    return this.httpClient.put<ChartEntity>(url, chart, { headers: headers })
      .pipe(
        map(() => chart),
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
