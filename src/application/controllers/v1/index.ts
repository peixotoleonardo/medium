import { articleControllers } from '@medium/application/controllers/v1/articles';
import { userControllers } from '@medium/application/controllers/v1/users';

export const controllersV1 = [...userControllers, ...articleControllers];
