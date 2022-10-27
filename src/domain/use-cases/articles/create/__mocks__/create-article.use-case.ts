import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';

export const CreateArticleUseCase = jest.fn().mockImplementation(() => ({
  execute: jest.fn().mockResolvedValue(articleFactory()),
}));
