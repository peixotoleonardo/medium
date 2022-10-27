import { faker } from '@faker-js/faker';

import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';
import { CreateArticleInputData } from '@medium/domain/use-cases/articles/create/create-article.input-data';

export const createArticleInputDataFactory = (
  input?: Partial<CreateArticleInputData>,
) =>
  new CreateArticleInputData(
    input?.title ?? faker.datatype.string(),
    input?.body ?? faker.lorem.text(),
    input?.author ?? userFactory(),
    input?.tags ?? faker.helpers.arrayElements(),
  );
