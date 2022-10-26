import { Paginate } from '@app/common/domain/paginate';
import { Repository } from '@app/common/domain/repository';
import { Article } from '@medium/domain/entities/article';

export interface IArticleRepository extends Repository<Article> {
  getAllArticlesOfUser(
    userId: number,
    page: number,
    perPage?: number,
  ): Promise<Paginate<Article>>;
}
