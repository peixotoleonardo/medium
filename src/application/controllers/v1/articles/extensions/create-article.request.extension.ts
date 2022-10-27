import { CreateArticleRequest } from '@medium/application/controllers/v1/articles/requests/create-article.request';
import { User } from '@medium/domain/entities/user';
import { CreateArticleInputData } from '@medium/domain/use-cases/articles/create/create-article.input-data';

declare module '@medium/application/controllers/v1/articles/requests/create-article.request' {
  interface CreateArticleRequest {
    toCreateArticleInputData(user: User): CreateArticleInputData;
  }
}

/* istanbul ignore next */
CreateArticleRequest.prototype.toCreateArticleInputData =
  CreateArticleRequest.prototype.toCreateArticleInputData ??
  function (user: User) {
    return new CreateArticleInputData(this.title, this.body, user, this.tags);
  };
