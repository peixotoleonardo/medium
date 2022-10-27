import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { GetUserByIdPipe } from '@medium/application/pipe/get-user-by-id.pipe';
import { User } from '@medium/domain/entities/user';
import { FindUserByIdUseCase } from '@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case';

jest.mock('@medium/domain/use-cases/users/find-by-id/find-user-by-id.use-case');

describe('GetUserByIdPipe', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [GetUserByIdPipe, FindUserByIdUseCase],
    }).compile();
  });

  describe('transform', () => {
    it('given an user id that exist should return an instance of User', () => {
      expect(module.get(GetUserByIdPipe).transform(1)).resolves.toBeInstanceOf(
        User,
      );
    });

    it('given an user id that exist should throw a NotFoundException', () => {
      (module.get(FindUserByIdUseCase).execute as jest.Mock).mockResolvedValue(
        null,
      );

      expect(module.get(GetUserByIdPipe).transform(1)).rejects.toThrow(
        new NotFoundException('User not found'),
      );
    });
  });
});
