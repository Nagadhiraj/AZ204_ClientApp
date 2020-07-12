import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Article } from '../../../models/article';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/Articleservice.service';
import { AppConstants } from '../../../Glossary';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleNameErrorMessage: String;
  shortInfoErrorMessage: String;
  contentErrorMessage: String;
  ErrorMessage: String;

  articleName = new FormControl('', [Validators.required]);
  shortInfo = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  articleNameText = AppConstants.ARTICLE_NAME_TEXT;
  articleShortIntroText = AppConstants.ARTICLE_SHORTINTRO_TEXT;
  articleContentText = AppConstants.ARTICLE_CONTENT_TEXT;
  saveArticleText = AppConstants.SAVE_ARTICLE_TEXT;

  constructor(private articleservice: ArticleService, private router: Router) { }

  ngOnInit() {
  }
  OnSaveArticle() {

    this.articleNameErrorMessage = this.articleName.hasError('required') ? 'Please enter the article name' : '';
    this.shortInfoErrorMessage = this.shortInfo.hasError('required') ? 'Please enter the short Information' : '';
    this.contentErrorMessage = this.content.hasError('required') ? 'Please re-enter your Password' : '';
    

    if (!(this.articleName.invalid && this.shortInfo.invalid && this.content.invalid)) {


      const article = new Article(this.articleName.value, 1, this.shortInfo.value, this.content.value);


      this.articleservice.saveArticle(article)
          .subscribe(
            res => {
              this.ErrorMessage = 'Article added';
              this.router.navigate(['admin/manageArticles/view']);
            }, err => {
              this.ErrorMessage = err.error.message;
            }
          );;
      

    }
  }


}
