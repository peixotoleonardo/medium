import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';

import { AppConfig } from '@app/common/infra/config/app.config';

export const serverSetup = async (app: INestApplication) => {
  const config = app.get<AppConfig>(AppConfig);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );

  await app.listen(config.port, () =>
    Logger.log(`server listen on port ${config.port}`),
  );
};
