import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Paginate } from '@app/common/domain/paginate';
import { AppConfig } from '@app/common/setup/config/app.config';
import { articleFactory } from '@medium/domain/entities/__mocks__/article.factory';
import { Article } from '@medium/domain/entities/article';
import { ArticleRepository } from '@medium/infra/typeorm/repositories/article.repository';

describe('ArticleRepository', () => {
  let module: TestingModule;

  const articleRepositoryMock = {
    createQueryBuilder: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    getManyAndCount: jest
      .fn()
      .mockResolvedValue(Array.from({ length: 3 }, () => articleFactory())),
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        ArticleRepository,
        {
          provide: getRepositoryToken(Article),
          useValue: articleRepositoryMock,
        },
        {
          provide: AppConfig,
          useValue: {
            paginate: {
              perPage: 10,
            },
          },
        },
      ],
    }).compile();
  });

  describe('getAllArticlesOfUser', () => {
    it('should return an instance of Paginate', () => {
      const repository = module.get(ArticleRepository);

      expect(repository.getAllArticlesOfUser(1, 1)).resolves.toBeInstanceOf(
        Paginate,
      );
    });

    it.each([
      [faker.datatype.number(), faker.datatype.number({ min: 1 }), null],
      [
        faker.datatype.number(),
        faker.datatype.number({ min: 1 }),
        faker.datatype.number({ min: 1 }),
      ],
    ])(
      'should make a valid query to get all articles of user',
      async (userId: number, page: number, perPage?: number) => {
        const config = module.get<AppConfig>(AppConfig);
        const repository = module.get(ArticleRepository);
        const take = perPage ?? config.paginate.perPage;

        await repository.getAllArticlesOfUser(userId, page, perPage);

        expect(
          articleRepositoryMock.createQueryBuilder,
        ).toHaveBeenNthCalledWith(1, 'article');
        expect(articleRepositoryMock.where).toHaveBeenNthCalledWith(
          1,
          'article.user_id = :userId',
          { userId },
        );
        expect(articleRepositoryMock.leftJoinAndSelect).toHaveBeenNthCalledWith(
          1,
          'article.tags',
          'tag',
        );
        expect(articleRepositoryMock.take).toHaveBeenNthCalledWith(1, take);
        expect(articleRepositoryMock.skip).toHaveBeenNthCalledWith(
          1,
          (page - 1) * take,
        );
        expect(articleRepositoryMock.getManyAndCount).toBeCalled();
      },
    );
  });
});
