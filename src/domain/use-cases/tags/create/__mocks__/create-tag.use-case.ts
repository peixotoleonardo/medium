import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';

export const CrateTagUseCase = jest.fn().mockImplementation(() => ({
  execute: jest
    .fn()
    .mockResolvedValue(Array.from({ length: 3 }, () => articleFactory())),
}));
