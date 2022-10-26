import { faker } from "@faker-js/faker";
import { CreateArticleController } from "@medium/application/controllers/v1/articles/create-article.controller";
import { CreateArticleRequest } from "@medium/application/controllers/v1/articles/requests/create-article.request";
import { CreateArticleResponse } from "@medium/application/controllers/v1/articles/responses/create-article.response";
import { UserByIdPipe } from "@medium/application/pipe/user-by-id.pipe";
import { Article } from "@medium/domain/entities/article";
import { User } from "@medium/domain/entities/user";
import { CreateArticleUseCase } from "@medium/domain/use-cases/articles/create/create-article.use-case";
import { Test, TestingModule } from "@nestjs/testing";

describe('CreateArticleController', () => {
  let module: TestingModule;
  const user = new User(
    faker.name.fullName(),
    faker.internet.email(),
  );
  const request = new CreateArticleRequest(
    faker.lorem.text(),
    faker.lorem.words(),
  );
  const useCaseMock = {
    execute: jest.fn().mockResolvedValue(
      new Article(
        faker.datatype.string(),
        faker.datatype.string(),
        user,
      )
    ),
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CreateArticleController],
      providers: [
        {
          provide: CreateArticleUseCase,
          useValue: useCaseMock,
        }
      ],
    })
    .overridePipe(UserByIdPipe)
    .useValue(jest.fn())
    .compile();
  });

  describe('create', () => {
    it('should return an instance of CreateArticleResponse', () => {
      expect(module.get(CreateArticleController).create(user, request))
        .resolves.toBeInstanceOf(CreateArticleResponse);
    });

    it('should call "CreateArticleUseCase.execute" with an instance of toCreateArticleInputData', async () => {
      await module.get(CreateArticleController).create(user, request);

      expect(useCaseMock.execute).toHaveBeenNthCalledWith(
        1, 
        request.toCreateArticleInputData(user),
      );
    })
  });
});