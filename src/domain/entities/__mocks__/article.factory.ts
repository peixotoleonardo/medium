import { faker } from '@faker-js/faker';

import { tagFactory } from '@medium/domain/entities/__mocks__/tag.factory';
import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';
import { Article } from '@medium/domain/entities/article';

export const articleFactory = (article?: Partial<Article>) =>
  new Article(
    article?.title ?? faker.datatype.string(),
    article?.body ?? faker.lorem.text(),
    article?.author ?? userFactory(),
    article?.tags ?? Array.from({ length: 3 }, () => tagFactory()),
  );
