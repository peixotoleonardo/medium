/* istanbul ignore file */
import Joi from 'joi';

import appConfig, {
  AppConfigSchema,
} from '@app/common/setup/config/app.config';
import swaggerConfig, {
  SwaggerConfigSchema,
} from '@app/common/setup/config/swagger.config';
import typeOrmConfig, {
  TypeOrmConfigSchema,
} from '@medium/config/typeorm.config';

export const config = [appConfig, swaggerConfig, typeOrmConfig];

export const schema = Joi.object({
  ...AppConfigSchema,
  ...SwaggerConfigSchema,
  ...TypeOrmConfigSchema,
});
