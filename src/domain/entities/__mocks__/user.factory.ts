import { faker } from '@faker-js/faker';

import { User } from '@medium/domain/entities/user';

export const userFactory = (user?: Partial<User>) =>
  new User(
    user?.name ?? faker.name.fullName(),
    user?.email ?? faker.internet.email(),
  );
