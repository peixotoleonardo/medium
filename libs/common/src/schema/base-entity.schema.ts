import { EntitySchemaColumnOptions } from 'typeorm';

import { BaseEntity } from '@app/common/domain/base-entity';

export const BaseEntitySchema: Record<
  keyof BaseEntity,
  EntitySchemaColumnOptions
> = {
  id: {
    type: Number,
    primary: true,
    generated: 'increment',
  },
  createdAt: {
    name: 'created_at',
    type: 'timestamptz',
    nullable: false,
  },
  updatedAt: {
    name: 'updated_at',
    type: 'timestamptz',
    nullable: true,
  },
};
