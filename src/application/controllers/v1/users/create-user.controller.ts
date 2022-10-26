import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import '@medium/application/controllers/v1/users/extensions/create-user.request.extension';
import '@medium/application/controllers/v1/users/extensions/create-user.response.extension';
import { CreateUserRequest } from '@medium/application/controllers/v1/users/requests/create-user.request';
import { CreateUseResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';

@ApiTags('users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly usecase: CreateUserUseCase) {}

  @Post()
  @Version('1')
  async create(@Body() request: CreateUserRequest): Promise<CreateUseResponse> {
    const input = request.toCreateUserInputData();

    const user = await this.usecase.execute(input);

    return user.toCreateUseResponse();
  }
}
