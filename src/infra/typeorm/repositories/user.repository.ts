import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeOrmRepository } from '@app/common/infra/typeorm-repository';
import { User } from '@medium/domain/entities/user';
import { IUserRepository } from '@medium/domain/repositories/user.repository';

@Injectable()
export class UserRepository
  extends TypeOrmRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User) protected readonly repository: Repository<User>,
  ) {
    super();
    this.repository = repository;
  }
}
