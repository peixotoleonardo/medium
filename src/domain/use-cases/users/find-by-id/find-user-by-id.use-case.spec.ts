import { User } from '@medium/domain/entities/user';
import { UserRepository } from '@medium/domain/repositories/__mocks__/user.repository';
import { FindUserByIdUseCase } from '@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case';

describe('FindUserByIdUseCase', () => {
  describe('execute', () => {
    it('should return an instance of User', () => {
      expect(
        new FindUserByIdUseCase(new UserRepository()).execute(1),
      ).resolves.toBeInstanceOf(User);
    });
  });
});
