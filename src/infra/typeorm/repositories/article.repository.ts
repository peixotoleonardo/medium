import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Paginate } from '@app/common/domain/paginate';
import { TypeOrmRepository } from '@app/common/infra/typeorm-repository';
import { AppConfig } from '@app/common/setup/config/app.config';
import { Article } from '@medium/domain/entities/article';
import { IArticleRepository } from '@medium/domain/repositories/article.repository';

@Injectable()
export class ArticleRepository
  extends TypeOrmRepository<Article>
  implements IArticleRepository
{
  constructor(
    @InjectRepository(Article)
    protected readonly repository: Repository<Article>,
    @Inject(AppConfig) protected readonly config: AppConfig,
  ) {
    super();
    this.repository = repository;
  }

  async getAllArticlesOfUser(
    userId: number,
    page: number,
    perPage?: number,
  ): Promise<Paginate<Article>> {
    const take = perPage ?? this.config.paginate.perPage;

    const [articles, total] = await this.repository
      .createQueryBuilder('article')
      .where('article.user_id = :userId', { userId })
      .leftJoinAndSelect('article.tags', 'tag')
      .take(take)
      .skip((page - 1) * take)
      .getManyAndCount();

    return new Paginate(articles, total, page, take);
  }
}
