import { CreateArticleResponse } from '@medium/application/controllers/v1/articles/responses/create-article.response';
import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';
import '@medium/application/controllers/v1/articles/extensions/create-article.response.extension';

describe('Article [extension]', () => {
  describe('toCreateArticleResponse', () => {
    it('should return an instance of CreateArticleResponse', () => {
      const article = articleFactory();

      expect(article.toCreateArticleResponse()).toStrictEqual(
        new CreateArticleResponse(article.id),
      );
    });
  });
});
