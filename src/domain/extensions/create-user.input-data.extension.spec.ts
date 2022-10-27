import { User } from '@medium/domain/entities/user';
import { createUserInputDataFactory } from '@medium/domain/use-cases/users/create/__mocks__/create-user.input-data';
import '@medium/domain/extensions/create-user.input-data.extension';

describe('CreateUserInputData [extension]', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('toUser', () => {
    it('should return an instance of User', () => {
      const input = createUserInputDataFactory();

      expect(input.toUser()).toStrictEqual(new User(input.name, input.email));
    });
  });
});
