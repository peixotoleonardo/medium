import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import '@medium/application/controllers/v1/articles/extensions/create-article.request.extension';
import '@medium/application/controllers/v1/articles/extensions/create-article.response.extension';

import { CreateArticleRequest } from '@medium/application/controllers/v1/articles/requests/create-article.request';
import { UserByIdPipe } from '@medium/application/pipe/user-by-id.pipe';
import { User } from '@medium/domain/entities/user';
import { CreateArticleUseCase } from '@medium/domain/use-cases/articles/create/create-article.use-case';

@ApiTags('articles')
@Controller('users/:id/articles')
export class CreateArticleController {
  constructor(private readonly usecase: CreateArticleUseCase) {}

  @Post()
  async create(
    @Param('id', UserByIdPipe) user: User,
    @Body() request: CreateArticleRequest,
  ) {
    const article = await this.usecase.execute(
      request.toCreateArticleInputData(user),
    );

    return article.toCreateArticleResponse();
  }
}
