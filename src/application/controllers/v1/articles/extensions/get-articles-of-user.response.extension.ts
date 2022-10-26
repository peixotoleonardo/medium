import { BaseEntity } from '@app/common/domain/base-entity';
import { Paginate } from '@app/common/domain/paginate';
import {
  Article,
  GetArticlesOfUserResponse,
} from '@medium/application/controllers/v1/articles/responses/get-articles-of-user.response';
import { Article as ArticleDomain } from '@medium/domain/entities/article';

declare module '@app/common/domain/paginate' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Paginate<T extends BaseEntity> {
    toGetArticlesOfUserResponse(): GetArticlesOfUserResponse;
  }
}

Paginate.prototype.toGetArticlesOfUserResponse =
  Paginate.prototype.toGetArticlesOfUserResponse ??
  function () {
    return new GetArticlesOfUserResponse(
      this.items.map(
        (article: ArticleDomain) =>
          new Article(
            article.id, 
            article.title, 
            article.body,
            article.tags?.map(tag => tag.value),
          ),
      ),
      this.nextPage,
      this.prevPage,
      this.lastPage,
      this.count,
      this.currentPage,
      this.perPage,
    );
  };
