import { faker } from '@faker-js/faker';

import { CreateArticleRequest } from '@medium/application/controllers/v1/articles/requests/create-article.request';

export const createArticleRequestFactory = (
  request?: Partial<CreateArticleRequest>,
) =>
  new CreateArticleRequest(
    request?.body ?? faker.lorem.text(),
    request?.title ?? faker.lorem.words(),
    request?.tags ?? faker.helpers.arrayElements(),
  );
