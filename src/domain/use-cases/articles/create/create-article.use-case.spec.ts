import { tagFactory } from '@medium/domain/entities/__mocks__/tag.factory';
import { Article } from '@medium/domain/entities/article';
import { ArticleRepository } from '@medium/domain/repositories/__mocks__/article';
import { createArticleInputDataFactory } from '@medium/domain/use-cases/articles/create/__mocks__/create-article.input-data';
import { CreateArticleUseCase } from '@medium/domain/use-cases/articles/create/create-article.use-case';
import { CrateTagUseCase } from '@medium/domain/use-cases/tags/create/__mocks__/create-tag.use-case';

describe('CreateArticleUseCase', () => {
  const crateTagUseCaseMock = new CrateTagUseCase();
  const articleRepositoryMock = new ArticleRepository();

  const usecase = new CreateArticleUseCase(
    articleRepositoryMock,
    crateTagUseCaseMock,
  );

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('execute', () => {
    it('should return an instance of Article', () => {
      expect(
        usecase.execute(createArticleInputDataFactory()),
      ).resolves.toBeInstanceOf(Article);
    });

    it('should save an article', async () => {
      const input = createArticleInputDataFactory();
      const tags = Array.from({ length: 3 }, () => tagFactory());
      (crateTagUseCaseMock.execute as jest.Mock).mockResolvedValue(tags);

      await usecase.execute(input);

      expect(articleRepositoryMock.save).toHaveBeenNthCalledWith(
        1,
        new Article(input.title, input.body, input.author, tags),
      );
    });
  });
});
