import { Repository } from '@app/common/domain/repository';
import { User } from '@medium/domain/entities/user';

export type IUserRepository = Repository<User>;
