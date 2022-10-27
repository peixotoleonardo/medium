import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';

export const FindUserByIdUseCase = jest.fn().mockImplementation(() => ({
  execute: jest.fn().mockResolvedValue(userFactory()),
}));
