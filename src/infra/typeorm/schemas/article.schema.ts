/* istanbul ignore file */
import { EntitySchema } from 'typeorm';

import { BaseEntitySchema } from '@app/common/infra/schema/base-entity.schema';
import { Article } from '@medium/domain/entities/article';
import { Tag } from '@medium/domain/entities/tag';
import { User } from '@medium/domain/entities/user';

export const ArticleSchema = new EntitySchema<Article>({
  name: Article.name,
  target: Article,
  tableName: 'articles',
  columns: {
    ...BaseEntitySchema,
    title: {
      type: String,
      length: 100,
      nullable: false,
    },
    body: {
      type: 'text',
      nullable: false,
    },
  },
  relations: {
    author: {
      type: 'many-to-one',
      target: User.name,
      joinColumn: {
        name: 'user_id',
      },
    },
    tags: {
      type: 'many-to-many',
      target: Tag.name,
      joinTable: {
        name: 'articles_tags',
        joinColumn: {
          name: 'article_id',
        },
        inverseJoinColumn: {
          name: 'tag_id',
        },
      },
    },
  },
});
