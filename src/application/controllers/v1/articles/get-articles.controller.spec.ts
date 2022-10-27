import { Test, TestingModule } from '@nestjs/testing';

import { GetArticlesOfUserController } from '@medium/application/controllers/v1/articles/get-articles.controller';
import { GetArticlesOfUserResponse } from '@medium/application/controllers/v1/articles/responses/get-articles-of-user.response';
import { GetArticlesOfUserUseCase } from '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case';

jest.mock(
  '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case',
);

describe('GetArticlesOfUserController', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [GetArticlesOfUserController],
      providers: [GetArticlesOfUserUseCase],
    }).compile();
  });

  describe('get', () => {
    it('should return an instance of GetArticlesOfUserResponse', () => {
      const page = 1;
      const userId = 1;
      const usecase = module.get(GetArticlesOfUserController);

      expect(usecase.get(userId, page)).resolves.toBeInstanceOf(
        GetArticlesOfUserResponse,
      );
    });
  });
});
