import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/Articleservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view-articles',
  templateUrl: './home-view-articles.component.html',
  styleUrls: ['./home-view-articles.component.css']
})
export class HomeViewArticleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router: Router) {
    const articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    this.article = this.articleService.getArticleById(articleId);
    this.articleId = articleId;
  }

  article: Article;
  errMessage: String;
  articleId: String;

  ngOnInit() {
  }

}
