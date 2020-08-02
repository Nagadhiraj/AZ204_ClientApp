import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Article } from '../../../models/article';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/Articleservice.service';
import { AppConstants } from '../../../Glossary';
import 'quill-emoji/dist/quill-emoji.js';
import { AlertService } from '../../../ui/_alert/alert.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  modules = {};
  editorStyle = {};
  articleNameErrorMessage: String;
  shortInfoErrorMessage: String;
  contentErrorMessage: String;
  ErrorMessage: String;
  isService: boolean = false;

  articleName = new FormControl('', [Validators.required]);
  shortInfo = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  articleNameText = AppConstants.ARTICLE_NAME_TEXT;
  articleShortIntroText = AppConstants.ARTICLE_SHORTINTRO_TEXT;
  articleContentText = AppConstants.ARTICLE_CONTENT_TEXT;
  saveArticleText = AppConstants.SAVE_ARTICLE_TEXT;

  constructor(private articleservice: ArticleService, private router: Router,
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

  ngOnInit() {
  }
  OnSaveArticle() {

    this.articleNameErrorMessage = this.articleName.hasError('required') ? 'Please enter the article name' : '';
    this.shortInfoErrorMessage = this.shortInfo.hasError('required') ? 'Please enter the short Information' : '';
    this.contentErrorMessage = this.content.hasError('required') ? 'Please re-enter your Password' : '';
    

    if (!(this.articleName.invalid && this.shortInfo.invalid && this.content.invalid)) {


      var article = new Article();
      article.isService = this.isService;
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

      this.articleservice.saveArticle(article)
          .subscribe(
            res => {
              this.alertService.success('Article/Service has been added successfully', this.options);
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

  checkboxclicked(){
    if(this.isService == false){
      this.articleNameText = AppConstants.ARTICLE_NAME_TEXT;
      this.articleShortIntroText = AppConstants.ARTICLE_SHORTINTRO_TEXT;
      this.articleContentText = AppConstants.ARTICLE_CONTENT_TEXT;
    }//(click)="checkboxclicked()"
  }

}
