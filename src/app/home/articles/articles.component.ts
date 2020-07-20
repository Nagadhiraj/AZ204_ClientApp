import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/Articleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  loader: boolean = false;
  public searchText: string;
  pageOfItems: Array<any>;

  constructor(private articleService: ArticleService, private router: Router,) { 
    
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

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  fnviewArticle(article: Article) {
    this.articleService.articleId = article.id;
    this.router.navigate(['home/articles/view']);
  }

}
