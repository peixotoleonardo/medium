import { Article } from '@medium/domain/entities/article';
import { IArticleRepository } from '@medium/domain/repositories/article.repository';
import { CreateArticleInputData } from '@medium/domain/use-cases/articles/create/create-article.input-data';
import { CreateTagUseCase } from '@medium/domain/use-cases/tags/create/create-tag.use-case';

export class CreateArticleUseCase {
  constructor(
    private readonly repository: IArticleRepository,
    private readonly crateTagUseCase: CreateTagUseCase,
  ) {}

  async execute(input: CreateArticleInputData): Promise<Article> {
    const tags = await this.crateTagUseCase.execute(input.tags);

    const article = new Article(input.title, input.body, input.author, tags);

    return this.repository.save(article);
  }
}
