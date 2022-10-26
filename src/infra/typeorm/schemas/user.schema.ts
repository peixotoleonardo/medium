import { EntitySchema } from 'typeorm';

import { BaseEntitySchema } from '@app/common/infra/schema/base-entity.schema';
import { Article } from '@medium/domain/entities/article';
import { User } from '@medium/domain/entities/user';

export const UserSchema = new EntitySchema<User>({
  name: User.name,
  tableName: 'users',
  columns: {
    ...BaseEntitySchema,
    name: {
      type: String,
      length: 150,
      nullable: false,
    },
    email: {
      type: String,
      length: 150,
      nullable: false,
    },
  },
  relations: {
    articles: {
      type: 'one-to-many',
      target: Article.name,
      joinColumn: {
        name: 'user_id',
      },
    },
  },
});
