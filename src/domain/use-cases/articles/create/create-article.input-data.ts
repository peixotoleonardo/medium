import { User } from '@medium/domain/entities/user';

export class CreateArticleInputData {
  constructor(
    readonly title: string,
    readonly body: string,
    readonly author: User,
    readonly tags?: string[],
  ) {}
}
