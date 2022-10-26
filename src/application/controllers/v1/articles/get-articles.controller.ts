import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import '@medium/application/controllers/v1/articles/extensions/get-articles-of-user.response.extension';
import { GetArticlesOfUserResponse } from '@medium/application/controllers/v1/articles/responses/get-articles-of-user.response';
import { GetArticlesOfUserUseCase } from '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case';

@ApiTags('articles')
@Controller('users/:id/articles')
export class GetArticlesOfUserController {
  constructor(private readonly usecase: GetArticlesOfUserUseCase) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetArticlesOfUserResponse,
  })
  async get(
    @Param('id') id: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    const articles = await this.usecase.execute(id, page);

    return articles.toGetArticlesOfUserResponse();
  }
}
