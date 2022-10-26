import { User } from '@medium/domain/entities/user';
import { IUserRepository } from '@medium/domain/repositories/user.repository';

export class FindUserByIdUseCase {
  constructor(private readonly repository: IUserRepository) {}

  execute(id: number): Promise<User> {
    return this.repository.findById(id);
  }
}
