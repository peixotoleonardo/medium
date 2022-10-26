import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { User } from '@medium/domain/entities/user';
import { UserRepository } from '@medium/infra/typeorm/repositories/user.repository';

describe('UserRepository', () => {
  let module: TestingModule;
  const typeOrmRepositoryMock = {
    save: jest
      .fn()
      .mockResolvedValue(
        new User(faker.name.fullName(), faker.internet.email()),
      ),
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getRepositoryToken(User),
          useValue: typeOrmRepositoryMock,
        },
      ],
    }).compile();
  });
  describe('save', () => {
    it('should return an instance of User', () => {
      const repository = module.get(UserRepository);

      expect(
        repository.save(
          new User(faker.name.fullName(), faker.internet.email()),
        ),
      ).resolves.toBeInstanceOf(User);
    });

    it('should call "Repository<User>.save" with an user instance', async () => {
      const repository = module.get(UserRepository);
      const user = new User(faker.name.fullName(), faker.internet.email());

      await repository.save(user);

      expect(typeOrmRepositoryMock.save).toBeCalledWith(user);
    });
  });
});
