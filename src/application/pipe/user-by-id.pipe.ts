import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';

import { User } from '@medium/domain/entities/user';
import { FindUserByIdUseCase } from '@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case';

@Injectable()
export class UserByIdPipe implements PipeTransform<number, Promise<User>> {
  constructor(private readonly usecase: FindUserByIdUseCase) {}

  async transform(id: number): Promise<User> {
    const user = await this.usecase.execute(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
