import { faker } from '@faker-js/faker';

import { User } from '@medium/domain/entities/user';
import { IUserRepository } from '@medium/domain/repositories/user.repository';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';

describe('CreateUserUseCase', () => {
  let repositoryMock: IUserRepository;
  const input = new CreateUserInputData(
    faker.name.fullName(),
    faker.internet.email(),
  );

  let usecase: CreateUserUseCase;

  beforeEach(() => {
    jest.useFakeTimers();

    repositoryMock = {
      save: jest.fn().mockResolvedValue(new User(input.name, input.email)),
      findById: jest.fn(),
    };

    usecase = new CreateUserUseCase(repositoryMock);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('execute', () => {
    it('should return a User instance', () => {
      expect(usecase.execute(input)).resolves.toBeInstanceOf(User);
    });

    it('should call "IUserRepository.save" with an user instance', async () => {
      await usecase.execute(input);

      expect(repositoryMock.save).toHaveBeenNthCalledWith(
        1,
        new User(input.name, input.email),
      );
    });
  });
});
