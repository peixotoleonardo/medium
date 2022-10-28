import { NestFactory } from '@nestjs/core';

import { serverSetup } from '@app/common/infra/setup/server.setup';
import { swaggerSetup } from '@app/common/infra/setup/swagger.setup';

export const bootstrap = async <T>(AppModule: T) => {
  const app = await NestFactory.create(AppModule);

  swaggerSetup(app);

  await serverSetup(app);
};
