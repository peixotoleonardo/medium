import { createUserRequestFactory } from '@medium/application/controllers/v1/users/requests/__mocks__/create-user.request.factory';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';
import '@medium/application/controllers/v1/users/extensions/create-user.request.extension';

describe('CreateUserRequest [extension]', () => {
  describe('toCreateUserInputData', () => {
    it('should return an instance of CreateUserInputData', () => {
      const request = createUserRequestFactory();

      expect(request.toCreateUserInputData()).toStrictEqual(
        new CreateUserInputData(request.name, request.email),
      );
    });
  });
});
