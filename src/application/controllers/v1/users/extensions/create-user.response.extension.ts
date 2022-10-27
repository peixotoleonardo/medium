import { CreateUserResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { User } from '@medium/domain/entities/user';

declare module '@medium/domain/entities/user' {
  interface User {
    toCreateUserResponse(): CreateUserResponse;
  }
}

/* istanbul ignore next */
User.prototype.toCreateUserResponse =
  User.prototype.toCreateUserResponse ??
  function () {
    return new CreateUserResponse(this.id);
  };
