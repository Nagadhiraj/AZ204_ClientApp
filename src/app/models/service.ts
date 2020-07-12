export class Service {
  serviceName: String;
  userId: Number;
  shortIntro: String;
  content: String;
  publishDate: Date;
  serviceId: Number;

  constructor(serviceName, userId, shortIntro, content) {
    this.serviceName = serviceName;
    this.userId = userId;
    this.shortIntro = shortIntro;
    this.content = content;
  }
}
