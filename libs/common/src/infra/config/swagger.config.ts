import { ConfigType, registerAs } from '@nestjs/config';
import Joi from 'joi';

const config = registerAs('swagger', () => ({
  title: process.env.SWAGGER_TITLE,
  description: process.env.SWAGGER_DESCRIPTION,
  apiPath: process.env.SWAGGER_API_PATH,
}));

export const SwaggerConfig = config.KEY;

export type SwaggerConfig = ConfigType<typeof config>;

export const SwaggerConfigSchema = {
  SWAGGER_TITLE: Joi.string().default('Medium API'),
  SWAGGER_DESCRIPTION: Joi.string().default(
    'Service to create, update and find articles',
  ),
  SWAGGER_API_PATH: Joi.string().default('docs'),
};

export default config;
