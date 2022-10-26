import { Paginate } from '@app/common/domain/paginate';
import { Article } from '@medium/domain/entities/article';
import { IArticleRepository } from '@medium/domain/repositories/article.repository';

export class GetArticlesOfUserUseCase {
  constructor(private readonly repository: IArticleRepository) {}

  execute(userId: number, page: number): Promise<Paginate<Article>> {
    return this.repository.getAllArticlesOfUser(userId, page);
  }
}
