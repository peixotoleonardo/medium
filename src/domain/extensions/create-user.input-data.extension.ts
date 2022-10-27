import { User } from '@medium/domain/entities/user';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';

declare module '@medium/domain/use-cases/users/create/create-user.input-data' {
  interface CreateUserInputData {
    toUser(): User;
  }
}

/* istanbul ignore next */
CreateUserInputData.prototype.toUser =
  CreateUserInputData.prototype.toUser ??
  function (): User {
    return new User(this.name, this.email);
  };
