import { BaseEntity } from '@app/common/domain/base-entity';

export interface Repository<T extends BaseEntity> {
  save(entity: T): Promise<T>;
  save(entities: T[]): Promise<T[]>;
  findById(id: number): Promise<T>;
}
