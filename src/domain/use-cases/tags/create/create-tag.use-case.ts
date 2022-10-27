import { Tag } from '@medium/domain/entities/tag';
import { ITagRepository } from '@medium/domain/repositories/tag.repository';

export class CreateTagUseCase {
  constructor(private repository: ITagRepository) {}

  async execute(tags: string[] = []): Promise<Tag[]> {
    if (!tags.length) {
      return [];
    }

    const tagsInDatabase = (await this.repository.findByValue(tags)).reduce(
      (tags: Map<string, Tag>, tag: Tag) => tags.set(tag.value, tag),
      new Map(),
    );

    const tagsToCreate = tags
      .filter((tag) => !tagsInDatabase.has(tag))
      .map((tag) => new Tag(tag));

    return [
      ...tagsInDatabase.values(),
      ...(await this.repository.save(tagsToCreate)),
    ];
  }
}
