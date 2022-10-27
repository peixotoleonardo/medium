import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';

export const ArticleRepository = jest.fn().mockImplementation(() => ({
  getAllArticlesOfUser: jest.fn(),
  save: jest.fn().mockResolvedValue(articleFactory()),
}));
