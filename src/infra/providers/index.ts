import { Provider } from '@nestjs/common';

import { factoryProvider } from '@app/common/utils/factory-provider';
import { CreateArticleUseCase } from '@medium/domain/use-cases/articles/create/create-article.use-case';
import { GetArticlesOfUserUseCase } from '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case';
import { CreateTagUseCase } from '@medium/domain/use-cases/tags/create/create-tag.use-case';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';
import { FindUserByIdUseCase } from '@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case';
import { ArticleRepository } from '@medium/infra/typeorm/repositories/article.repository';
import { TagRepository } from '@medium/infra/typeorm/repositories/tag.repository';
import { UserRepository } from '@medium/infra/typeorm/repositories/user.repository';

export const providers: Provider[] = [
  {
    provide: CreateUserUseCase,
    useFactory: factoryProvider(CreateUserUseCase),
    inject: [UserRepository],
  },
  {
    provide: FindUserByIdUseCase,
    useFactory: factoryProvider(FindUserByIdUseCase),
    inject: [UserRepository],
  },
  {
    provide: CreateTagUseCase,
    useFactory: factoryProvider(CreateTagUseCase),
    inject: [TagRepository],
  },
  {
    provide: CreateArticleUseCase,
    useFactory: factoryProvider(CreateArticleUseCase),
    inject: [ArticleRepository, CreateTagUseCase],
  },
  {
    provide: GetArticlesOfUserUseCase,
    useFactory: factoryProvider(GetArticlesOfUserUseCase),
    inject: [ArticleRepository],
  },
];

export const providersToExport = [
  CreateUserUseCase,
  FindUserByIdUseCase,
  CreateArticleUseCase,
  GetArticlesOfUserUseCase,
];
