
import { Article } from '../models/article';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
//import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient,
    //private msalService: MsalService
    ) { }

  articleId: string;
  articles: Array<Article>;

  getArticles() {
    return this.httpClient.get<Array<Article>>(environment.apiUrl+ 'article').pipe( //+ 'Get'
      tap(
        articles => {
          this.articles = articles;
        },
        catchError(this.handleError)
      )
    );
  }

  getArticleById(id: string): Observable<Article> {
    const url = `${environment.apiUrl + 'article'}/${id}`; //'Get'
    return this.httpClient.get<Article>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  saveArticle(article: Article): Observable<Article> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Article>(environment.apiUrl + 'article', article, { headers: headers }) // + 'CreateOrUpdate'
      .pipe(
        catchError(this.handleError)
      );
  }

  updateArticle(article: Article): Observable<Article> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = environment.apiUrl + 'article'; // + 'CreateOrUpdate';
    return this.httpClient.put<Article>(url, article, { headers: headers })
      .pipe(
        map(() => article),
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
