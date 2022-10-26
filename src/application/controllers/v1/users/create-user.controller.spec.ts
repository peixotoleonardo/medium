import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserController } from '@medium/application/controllers/v1/users/create-user.controller';
import { CreateUserRequest } from '@medium/application/controllers/v1/users/requests/create-user.request';
import { CreateUseResponse } from '@medium/application/controllers/v1/users/responses/create-user.response';
import { User } from '@medium/domain/entities/user';
import { CreateUserInputData } from '@medium/domain/use-cases/users/create/create-user.input-data';
import { CreateUserUseCase } from '@medium/domain/use-cases/users/create/create-user.use-case';

describe('CreateUserController', () => {
  let module: TestingModule;
  const request = new CreateUserRequest(
    faker.name.fullName(),
    faker.internet.email(),
  );

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [
        {
          provide: CreateUserUseCase,
          useValue: {
            execute: jest
              .fn()
              .mockResolvedValue(
                new User(faker.name.fullName(), faker.internet.email()),
              ),
          },
        },
      ],
    }).compile();
  });

  describe('create', () => {
    it('should return a CreateUseResponse instance', () => {
      expect(
        module.get(CreateUserController).create(request),
      ).resolves.toBeInstanceOf(CreateUseResponse);
    });

    it('given a request should call "CreateUserUseCase.execute" with a valid CreateUserInputData', () => {
      module.get(CreateUserController).create(request);

      expect(module.get(CreateUserUseCase).execute).toHaveBeenNthCalledWith(
        1,
        new CreateUserInputData(request.name, request.email),
      );
    });
  });
});
