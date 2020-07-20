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
      this.router.navigate(['home/articles']);
    }
    this.loader = true;
    this.articleid = articleId;
    this.articleService.getArticleById(articleId).subscribe(
      data => {
        this.loader = false;
        this.article = data;
        //this.dateOfBirth = new FormControl(this.article.publishDate, [Validators.required]);
      },
      err => {
        this.loader = false;
        //console.log(err);
        this.errMessage = err;
      }
    );
  }

  OnCancel() {
    this.router.navigate(['articles']);
  }

}
