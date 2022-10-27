import { Paginate } from '@app/common/domain/paginate';
import {
  Article,
  GetArticlesOfUserResponse,
} from '@medium/application/controllers/v1/articles/responses/get-articles-of-user.response';
import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';
import '@medium/application/controllers/v1/articles/extensions/get-articles-of-user.response.extension';
import { Article as ArticleDomain } from '@medium/domain/entities/article';

describe('Paginate [extension]', () => {
  describe('toGetArticlesOfUserResponse', () => {
    it('should return an instance of GetArticlesOfUserResponse', () => {
      const articles = Array.from({ length: 3 }, () => articleFactory());
      const paginate = new Paginate(articles, articles.length, 1, 10);

      expect(paginate.toGetArticlesOfUserResponse()).toStrictEqual(
        new GetArticlesOfUserResponse(
          paginate.items.map(
            (article: ArticleDomain) =>
              new Article(
                article.id,
                article.title,
                article.body,
                article.tags?.map((tag) => tag.value),
              ),
          ),
          paginate.nextPage,
          paginate.prevPage,
          paginate.lastPage,
          paginate.count,
          paginate.currentPage,
          paginate.perPage,
        ),
      );
    });
  });
});
