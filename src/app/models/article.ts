export class Article {
  articleName: String;
  userId: Number;
  shortIntro: String;
  content: String;
  publishDate: Date;
  articleId: Number;

  constructor(articleName, userId, shortIntro, content) {
    this.articleName = articleName;
    this.userId = userId;
    this.shortIntro = shortIntro;
    this.content = content;
  }
}
