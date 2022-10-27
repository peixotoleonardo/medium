import { User } from '@medium/domain/entities/user';
import { UserRepository } from '@medium/domain/repositories/__mocks__/user.repository';
import { IUserRepository } from '@medium/domain/repositories/user.repository';
import { createUserInputDataFactory } from '@medium/domain/use-cases/users/create/__mocks__/create-user.input-data';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';

describe('CreateUserUseCase', () => {
  let usecase: CreateUserUseCase;
  let userRepositoryMock: IUserRepository;

  beforeEach(() => {
    jest.useFakeTimers();
    userRepositoryMock = new UserRepository();
    usecase = new CreateUserUseCase(userRepositoryMock);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('execute', () => {
    it('should return a User instance', () => {
      expect(
        usecase.execute(createUserInputDataFactory()),
      ).resolves.toBeInstanceOf(User);
    });

    it('should call "IUserRepository.save" with an user instance', async () => {
      const input = createUserInputDataFactory();

      await usecase.execute(input);

      expect(userRepositoryMock.save).toHaveBeenNthCalledWith(
        1,
        new User(input.name, input.email),
      );
    });
  });
});
