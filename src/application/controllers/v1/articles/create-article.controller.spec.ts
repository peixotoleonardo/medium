import { Test, TestingModule } from '@nestjs/testing';

import { CreateArticleController } from '@medium/application/controllers/v1/articles/create-article.controller';
import { createArticleRequestFactory } from '@medium/application/controllers/v1/articles/requests/__mocks__/create-article.request.factory';
import { CreateArticleResponse } from '@medium/application/controllers/v1/articles/responses/create-article.response';
import { UserByIdPipe } from '@medium/application/pipe/user-by-id.pipe';
import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';
import { CreateArticleUseCase } from '@medium/domain/use-cases/articles/create/create-article.use-case';

jest.mock('@medium/domain/use-cases/articles/create/create-article.use-case');

describe('CreateArticleController', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CreateArticleController],
      providers: [CreateArticleUseCase],
    })
      .overridePipe(UserByIdPipe)
      .useValue(jest.fn())
      .compile();
  });

  describe('create', () => {
    it('should return an instance of CreateArticleResponse', () => {
      expect(
        module
          .get(CreateArticleController)
          .create(userFactory(), createArticleRequestFactory()),
      ).resolves.toBeInstanceOf(CreateArticleResponse);
    });

    it('should call "CreateArticleUseCase.execute" with an instance of toCreateArticleInputData', async () => {
      const user = userFactory();
      const request = createArticleRequestFactory();

      await module.get(CreateArticleController).create(user, request);

      expect(module.get(CreateArticleUseCase).execute).toHaveBeenNthCalledWith(
        1,
        request.toCreateArticleInputData(user),
      );
    });
  });
});
