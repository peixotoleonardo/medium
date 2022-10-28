import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { tagFactory } from '@medium/domain/entities/__mocks__/tag.factory';
import { Tag } from '@medium/domain/entities/tag';
import { TagRepository } from '@medium/infra/typeorm/repositories/tag.repository';

describe('TagRepository', () => {
  let module: TestingModule;

  const tagTypeOrmRepositoryMock = {
    find: jest
      .fn()
      .mockResolvedValue(Array.from({ length: 10 }, () => tagFactory())),
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        TagRepository,
        {
          provide: getRepositoryToken(Tag),
          useValue: tagTypeOrmRepositoryMock,
        },
      ],
    }).compile();
  });
  describe('findByValue', () => {
    it('should return a array of Tag', async () => {
      const tags = await module
        .get(TagRepository)
        .findByValue(faker.helpers.arrayElements());

      expect(tags.every((tag) => tag instanceof Tag)).toBeTruthy();
    });

    it('should call "Repository<Tag>.find" with correct arguments', async () => {
      const tags = faker.helpers.arrayElements<string>();

      await module.get(TagRepository).findByValue(tags);

      expect(tagTypeOrmRepositoryMock.find).toHaveBeenNthCalledWith(1, {
        where: tags.map((tag) => ({ value: tag })),
      });
    });
  });
});
