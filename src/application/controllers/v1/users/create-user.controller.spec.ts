import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserController } from '@medium/application/controllers/v1/users/create-user.controller';
import { createUserRequestFactory } from '@medium/application/controllers/v1/users/requests/__mocks__/create-user.request.factory';
import { CreateUserResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';

jest.mock('@medium/domain/use-cases/users/create/create-user.use-case');

describe('CreateUserController', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [CreateUserUseCase],
    }).compile();
  });

  describe('create', () => {
    it('should return a CreateUseResponse instance', () => {
      expect(
        module.get(CreateUserController).create(createUserRequestFactory()),
      ).resolves.toBeInstanceOf(CreateUserResponse);
    });

    it('given a request should call "CreateUserUseCase.execute" with a valid CreateUserInputData', () => {
      const request = createUserRequestFactory();
      module.get(CreateUserController).create(request);

      expect(module.get(CreateUserUseCase).execute).toHaveBeenNthCalledWith(
        1,
        new CreateUserInputData(request.name, request.email),
      );
    });
  });
});
