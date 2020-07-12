import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }
  articles: Array<Article>;

  getArticles() {
    //return this.httpClient.get<Array<Article>>('https://localhost:44305/api/article').pipe(
      return this.httpClient.get<Array<Article>>('/api/article').pipe(
      tap(
        articles => {
          this.articles = articles;
        }
      )
    );
  }

  saveArticle(data) {
    //return this.httpClient.post('https://localhost:44305/api/article', data);
    return this.httpClient.post('/api/article', data);
  }

  updateArticle(article, articleId) {
    //return this.httpClient.post(`https://localhost:44305/api/article/${articleId}`, article);
    return this.httpClient.post(`/api/article/${articleId}`, article);
  }

  getArticleById(articleId): Article {
    const article = this.articles.find(article => article.articleId == articleId);
    return Object.assign({}, article);
  }
}
