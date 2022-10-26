import { Provider } from '@nestjs/common';

import { CreateArticleUseCase } from '@medium/domain/use-cases/articles/create/create-article.use-case';
import { GetArticlesOfUserUseCase } from '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case';
import { CrateTagUseCase } from '@medium/domain/use-cases/tags/create/create-tag.use-case';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';
import { FindUserByIdUseCase } from '@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case';
import { ArticleRepository } from '@medium/infra/typeorm/repositories/article.repository';
import { TagRepository } from '@medium/infra/typeorm/repositories/tag.repository';
import { UserRepository } from '@medium/infra/typeorm/repositories/user.repository';

export const providers: Provider[] = [
  {
    provide: CreateUserUseCase,
    useFactory: (repository: UserRepository) =>
      new CreateUserUseCase(repository),
    inject: [UserRepository],
  },
  {
    provide: FindUserByIdUseCase,
    useFactory: (repository: UserRepository) =>
      new FindUserByIdUseCase(repository),
    inject: [UserRepository],
  },
  {
    provide: CrateTagUseCase,
    useFactory: (repository: TagRepository) => new CrateTagUseCase(repository),
    inject: [TagRepository],
  },
  {
    provide: CreateArticleUseCase,
    useFactory: (repository: ArticleRepository, usecase: CrateTagUseCase) =>
      new CreateArticleUseCase(repository, usecase),
    inject: [ArticleRepository, CrateTagUseCase],
  },
  {
    provide: GetArticlesOfUserUseCase,
    useFactory: (repository: ArticleRepository) =>
      new GetArticlesOfUserUseCase(repository),
    inject: [ArticleRepository],
  },
];

export const providersToExport = [
  CreateUserUseCase,
  FindUserByIdUseCase,
  CreateArticleUseCase,
  GetArticlesOfUserUseCase,
];
