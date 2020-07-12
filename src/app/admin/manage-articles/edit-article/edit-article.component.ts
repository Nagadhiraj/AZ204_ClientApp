import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../../services/Articleservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router: Router) {
    const articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    this.article = this.articleService.getArticleById(articleId);
    this.articleid = articleId;
  }
  article: Article;
  errMessage: String;
  articleid: String;

  ngOnInit() {
  }

  articleNameErrorMessage: String;
  shortInfoErrorMessage: String;
  contentErrorMessage: String;
  ErrorMessage: String;

  articleName = new FormControl('', [Validators.required]);
  shortInfo = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  OnUpdateArticle() {

    this.articleNameErrorMessage = this.articleName.hasError('required') ? 'Please enter the article name' : '';
    this.shortInfoErrorMessage = this.shortInfo.hasError('required') ? 'Please enter the short Information' : '';
    this.contentErrorMessage = this.content.hasError('required') ? 'Please re-enter your Password' : '';


    if (!(this.articleName.invalid && this.shortInfo.invalid && this.content.invalid)) {


      const article = new Article(this.articleName.value, 1, this.shortInfo.value, this.content.value);

      this.articleService.updateArticle(article, this.articleid)
        .subscribe(
          res => {
            this.ErrorMessage = 'Article Updated';
            this.router.navigate(['admin/manageArticles/view']);
          }, err => {
            this.ErrorMessage = err.error.message;
          }
        );;


    }
  }

}
