import { CreateArticleResponse } from '@medium/application/controllers/v1/articles/responses/create-article.response';
import { Article } from '@medium/domain/entities/article';

declare module '@medium/domain/entities/article' {
  interface Article {
    toCreateArticleResponse(): CreateArticleResponse;
  }
}

Article.prototype.toCreateArticleResponse =
  Article.prototype.toCreateArticleResponse ??
  function () {
    return new CreateArticleResponse(this.id);
  };
