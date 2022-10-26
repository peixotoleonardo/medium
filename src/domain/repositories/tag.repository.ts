import { Repository } from '@app/common/domain/repository';
import { Tag } from '@medium/domain/entities/tag';

export interface ITagRepository extends Repository<Tag> {
  findByValue(values: string[]): Promise<Tag[]>;
}
