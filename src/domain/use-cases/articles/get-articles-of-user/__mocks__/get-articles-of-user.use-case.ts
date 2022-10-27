import { Paginate } from '@app/common/domain/paginate';
import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';

export const GetArticlesOfUserUseCase = jest.fn().mockImplementation(() => {
  const articles = Array.from({ length: 3 }, () => articleFactory());

  return {
    execute: jest
      .fn()
      .mockResolvedValue(new Paginate(articles, articles.length, 1, 10)),
  };
});
