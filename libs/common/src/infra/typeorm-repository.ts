import { FindOptionsWhere, Repository } from 'typeorm';

import { BaseEntity } from '@app/common/domain/base-entity';
import { Repository as IRepository } from '@app/common/domain/repository';

export abstract class TypeOrmRepository<T extends BaseEntity>
  implements IRepository<T>
{
  protected abstract repository: Repository<T>;

  save(entity: T): Promise<T>;
  save(entities: T[]): Promise<T[]>;
  save(entityOrEntities: T | T[]): Promise<T | T[]> {
    if (Array.isArray(entityOrEntities)) {
      return this.repository.save(entityOrEntities);
    }

    return this.repository.save(entityOrEntities as T);
  }

  findById(id: number): Promise<T> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }
}
