import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jumbotron } from '../models/jumbotron';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JumbotronService {
  constructor(private httpClient: HttpClient) { }
  jumbotrons: Array<Jumbotron>;

  getjumbotrons() {
    //return this.httpClient.get<Array<Jumbotron>>('https://localhost:44305/api/jumbotron').pipe(
    return this.httpClient.get<Array<Jumbotron>>('/api/jumbotron').pipe(
      tap(
        jumbotrons => {
          this.jumbotrons = jumbotrons;
        }
      )
    );
  }
}
