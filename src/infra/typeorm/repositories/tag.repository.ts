import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeOrmRepository } from '@app/common/infra/typeorm-repository';
import { Tag } from '@medium/domain/entities/tag';
import { ITagRepository } from '@medium/domain/repositories/tag.repository';

@Injectable()
export class TagRepository
  extends TypeOrmRepository<Tag>
  implements ITagRepository
{
  constructor(@InjectRepository(Tag) protected repository: Repository<Tag>) {
    super();
  }

  findByValue(values: string[]): Promise<Tag[]> {
    return this.repository.find({
      where: values.map((value) => ({ value })),
    });
  }
}
