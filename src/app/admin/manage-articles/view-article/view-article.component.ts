import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../../services/Articleservice.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe(
      data => this.articles = data,
      err => {
        this.errMessage = err.error.message;
      }
    );
  }
  
  articles: Array<Article>;
  errMessage: string;


  ngOnInit() {
  }

}
