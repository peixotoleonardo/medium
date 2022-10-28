/* istanbul ignore file */
import Joi from 'joi';

import appConfig, {
  AppConfigSchema,
} from '@app/common/infra/config/app.config';
import swaggerConfig, {
  SwaggerConfigSchema,
} from '@app/common/infra/config/swagger.config';
import typeOrmConfig, {
  TypeOrmConfigSchema,
} from '@medium/infra/config/typeorm.config';

export const config = [appConfig, swaggerConfig, typeOrmConfig];

export const schema = Joi.object({
  ...AppConfigSchema,
  ...SwaggerConfigSchema,
  ...TypeOrmConfigSchema,
});
