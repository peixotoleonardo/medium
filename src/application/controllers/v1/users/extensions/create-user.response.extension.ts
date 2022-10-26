import { CreateUseResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { User } from '@medium/domain/entities/user';

declare module '@medium/domain/entities/user' {
  interface User {
    toCreateUseResponse(): CreateUseResponse;
  }
}

User.prototype.toCreateUseResponse =
  User.prototype.toCreateUseResponse ??
  function () {
    return new CreateUseResponse(this.id);
  };
