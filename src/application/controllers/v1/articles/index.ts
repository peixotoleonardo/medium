/* istanbul ignore file */
import { CreateArticleController } from '@medium/application/controllers/v1/articles/create-article.controller';
import { GetArticlesOfUserController } from '@medium/application/controllers/v1/articles/get-articles.controller';

export const articleControllers = [
  CreateArticleController,
  GetArticlesOfUserController,
];
