import { faker } from '@faker-js/faker';

import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';

export const createUserInputDataFactory = (
  input?: Partial<CreateUserInputData>,
) =>
  new CreateUserInputData(
    input?.name ?? faker.name.fullName(),
    input?.email ?? faker.internet.email(),
  );
