import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/Articleservice.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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
