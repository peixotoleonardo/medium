import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SwaggerConfig } from '@app/common/infra/config/swagger.config';

export const swaggerSetup = (app: INestApplication) => {
  const config = app.get<SwaggerConfig>(SwaggerConfig);

  const document = new DocumentBuilder()
    .setTitle(config.title)
    .setDescription(config.description)
    .build();

  SwaggerModule.setup(
    config.apiPath,
    app,
    SwaggerModule.createDocument(app, document),
  );
};
