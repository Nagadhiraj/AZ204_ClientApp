import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../../services/Articleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  loader: boolean = false;
  public deleteArticle: Article = new Article();
  public isDisabled: boolean = false;
  public searchText: string;
  pageOfItems: Array<any>;
  constructor(private articleService: ArticleService, private router: Router, ) {
    
  }
  
  articles: Array<Article> = [];
  errMessage: string;


  ngOnInit() {
    this.fetcharticles();
  }

  fetcharticles() {
    this.articles = [];
    this.loader = true;
    this.articleService.getArticles().subscribe(
      data => {
        this.loader = false;
        this.articles = data;
        //console.log(this.articles);
      },
      err => {
        //console.log(err);
        this.errMessage = err;
        this.loader = false;
      }
    );
  }

  fneditArticle(article: Article) {
    this.articleService.articleId = article.id;
    this.router.navigate(['admin/manageArticles/edit/editArticle']);
  }

  onDelete(article: Article) {
    this.deleteArticle = article;
  }

  fndeleteUser(article: Article) {
    this.isDisabled = true;
    article.isActive = false;
    article.modifiedBy = "Mrinmoyee Sinha";
    article.modifiedDate = (new Date()).toLocaleString();
    this.articleService.updateArticle(article)
      .subscribe(
        res => {
          this.fetcharticles();
          this.isDisabled = false;
          this.deleteArticle = new Article();
        },
        err => {
          console.log(err);
          this.isDisabled = false;
          this.deleteArticle = new Article();
        }
      );
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onRefresh() {
    this.fetcharticles();
  }

  onAdd() {
    this.router.navigate(['admin/manageArticles/add']);
  }

}
