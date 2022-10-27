import { faker } from '@faker-js/faker';

import { CreateUserRequest } from '@medium/application/controllers/v1/users/requests/create-user.request';

export const createUserRequestFactory = () =>
  new CreateUserRequest(faker.name.fullName(), faker.internet.email());
