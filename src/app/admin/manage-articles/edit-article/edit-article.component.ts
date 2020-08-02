import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../../services/Articleservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../../ui/_alert/alert.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  modules = {};
  editorStyle = {};
  isService: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, 
    private router: Router,
    private alertService: AlertService ) {
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video'],                         // link and image, video
        ['emoji']

      ]
    }
    this.editorStyle = {
      height : '400px',
    }
  }

  article: Article;
  errMessage: string;
  articleid: string;
  loader: boolean = false;

  ngOnInit() {
    this.fetchArticleDetail();
  }

  fetchArticleDetail() {
    var articleId = this.articleService.articleId;
    if (articleId == undefined) {
      this.router.navigate(['admin/manageArticles/view']);
    }
    this.loader = true;
    this.articleid = articleId;
    this.articleService.getArticleById(articleId).subscribe(
      data => {
        this.loader = false;
        this.article = data;
        this.isService = this.article.isService;
        //this.dateOfBirth = new FormControl(this.article.publishDate, [Validators.required]);
      },
      err => {
        this.loader = false;
        //console.log(err);
        this.errMessage = err;
      }
    );
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

      var article = new Article();
      article.isService = this.isService;
      article.id = this.articleid;
      article.name = this.articleName.value;
      article.content = this.content.value;
      article.shortIntro = this.shortInfo.value;
      article.createdBy = "Mrinmoyee Sinha";
      article.createdDate = (new Date()).toLocaleString();
      article.modifiedBy = "Mrinmoyee Sinha";
      article.modifiedDate = (new Date()).toLocaleString();
      article.isActive = true;
      article.publishBy = "Mrinmoyee Sinha";
      article.publishDate = (new Date()).toLocaleString();

      this.articleService.updateArticle(article)
        .subscribe(
          res => {
            this.alertService.success('Article/Service has been updated successfully', this.options);
            this.router.navigate(['admin/manageArticles/view']);
          }, err => {
            this.alertService.error('An error occured', this.options);
          }
        );;


    }
  }

  OnCancel() {
    this.router.navigate(['admin/manageArticles/view']);
  }

}
