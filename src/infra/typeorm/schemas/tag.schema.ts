import { EntitySchema } from 'typeorm';

import { BaseEntitySchema } from '@app/common/infra/schema/base-entity.schema';
import { Tag } from '@medium/domain/entities/tag';

export const TagSchema = new EntitySchema<Tag>({
  name: Tag.name,
  tableName: 'tags',
  target: Tag,
  columns: {
    ...BaseEntitySchema,
    value: {
      type: String,
      length: 100,
      nullable: false,
    },
  },
});
