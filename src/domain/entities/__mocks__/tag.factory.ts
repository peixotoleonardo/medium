import { faker } from '@faker-js/faker';

import { Tag } from '@medium/domain/entities/tag';

export const tagFactory = (tag?: Tag) =>
  new Tag(tag?.value ?? faker.datatype.string());
