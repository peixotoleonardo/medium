import { CreateUserRequest } from '@medium/application/controllers/v1/users/requests/create-user.request';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';

declare module '@medium/application/controllers/v1/users/requests/create-user.request' {
  interface CreateUserRequest {
    toCreateUserInputData(): CreateUserInputData;
  }
}

CreateUserRequest.prototype.toCreateUserInputData =
  CreateUserRequest.prototype.toCreateUserInputData ??
  function () {
    return new CreateUserInputData(this.name, this.email);
  };
