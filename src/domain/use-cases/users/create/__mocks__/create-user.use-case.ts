import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';

export const CreateUserUseCase = jest.fn().mockImplementation(() => ({
  execute: jest.fn().mockResolvedValue(userFactory()),
}));
