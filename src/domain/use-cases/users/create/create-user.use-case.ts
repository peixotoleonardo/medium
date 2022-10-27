import '@medium/domain/extensions/create-user.input-data.extension';

import { User } from '@medium/domain/entities/user';
import { IUserRepository } from '@medium/domain/repositories/user.repository';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';

export class CreateUserUseCase {
  constructor(private readonly repository: IUserRepository) {}

  execute(input: CreateUserInputData): Promise<User> {
    return this.repository.save(input.toUser());
  }
}
