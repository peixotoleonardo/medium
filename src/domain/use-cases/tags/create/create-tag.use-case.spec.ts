import { faker } from '@faker-js/faker';

import { tagFactory } from '@medium/domain/entities/__mocks__/tag.factory';
import { Tag } from '@medium/domain/entities/tag';
import { TagRepository } from '@medium/domain/repositories/__mocks__/tag.repository';
import { CreateTagUseCase } from '@medium/domain/use-cases/tags/create/create-tag.use-case';

describe('CrateTagUseCase', () => {
  const tagRepositoryMock = new TagRepository();
  const usecase = new CreateTagUseCase(tagRepositoryMock);

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('execute', () => {
    it('given an empty array of tags should return an empty array', () => {
      expect(usecase.execute([])).resolves.toStrictEqual([]);
    });

    it('not given an argument should return an empty array', () => {
      expect(usecase.execute()).resolves.toStrictEqual([]);
    });

    it('should return an array of Tag instances', async () => {
      const tags = await usecase.execute(faker.helpers.arrayElements());

      expect(tags.every((tag) => tag instanceof Tag)).toBeTruthy();
    });

    it('should save only tags that not exist in database', async () => {
      const tags = ['not-to-save', 'save'];
      (tagRepositoryMock.findByValue as jest.Mock).mockResolvedValue([
        tagFactory({ value: 'not-to-save' }),
      ]);

      await usecase.execute(tags);

      expect(tagRepositoryMock.save).toHaveBeenNthCalledWith(1, [
        new Tag('save'),
      ]);
    });
  });
});
