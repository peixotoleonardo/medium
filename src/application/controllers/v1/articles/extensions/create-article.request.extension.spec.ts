import { faker } from '@faker-js/faker';

import { CreateArticleRequest } from '@medium/application/controllers/v1/articles/requests/create-article.request';
import { User } from '@medium/domain/entities/user';
import { CreateArticleInputData } from '@medium/domain/use-cases/articles/create/create-article.input-data';

import '@medium/application/controllers/v1/articles/extensions/create-article.request.extension';

describe('CreateArticleRequest [extension]', () => {
  describe('toCreateArticleInputData', () => {
    it('should return an instance of CreateArticleInputData', () => {
      const user = new User(faker.name.fullName(), faker.internet.email());
      const request = new CreateArticleRequest(
        faker.lorem.text(),
        faker.lorem.words(),
        faker.helpers.arrayElements(),
      );

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
