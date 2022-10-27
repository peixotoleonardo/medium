import { tagFactory } from '@medium/domain/entities/__mocks__/tag.factory';

export const TagRepository = jest.fn().mockImplementation(() => ({
  save: jest
    .fn()
    .mockResolvedValue(Array.from({ length: 3 }, () => tagFactory())),
  findByValue: jest
    .fn()
    .mockResolvedValue(Array.from({ length: 3 }, () => tagFactory())),
}));
