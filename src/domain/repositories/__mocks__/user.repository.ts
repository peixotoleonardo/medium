import { userFactory } from '@medium/domain/entities/__mocks__/user.factory';

export const UserRepository = jest.fn().mockImplementation(() => ({
  save: jest.fn().mockResolvedValue(userFactory()),
  findById: jest.fn().mockResolvedValue(userFactory()),
}));
