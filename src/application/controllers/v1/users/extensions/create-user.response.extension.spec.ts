import { CreateUserResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';
import '@medium/application/controllers/v1/users/extensions/create-user.response.extension';

describe('User [extension]', () => {
  describe('toCreateUseResponse', () => {
    it('should return an instance of CreateUserResponse', () => {
      const user = userFactory();

      expect(user.toCreateUserResponse()).toStrictEqual(
        new CreateUserResponse(user.id),
      );
    });
  });
});
