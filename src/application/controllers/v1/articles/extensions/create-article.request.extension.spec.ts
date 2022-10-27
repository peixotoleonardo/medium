import { createArticleRequestFactory } from '@medium/application/controllers/v1/articles/requests/__mocks__/create-article.request.factory';
import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';
import { CreateArticleInputData } from '@medium/domain/use-cases/articles/create/create-article.input-data';
import '@medium/application/controllers/v1/articles/extensions/create-article.request.extension';

describe('CreateArticleRequest [extension]', () => {
  describe('toCreateArticleInputData', () => {
    it('should return an instance of CreateArticleInputData', () => {
      const user = userFactory();
      const request = createArticleRequestFactory();

      expect(request.toCreateArticleInputData(user)).toStrictEqual(
        new CreateArticleInputData(
          request.title,
          request.body,
          user,
          request.tags,
        ),
      );
    });
  });
});
