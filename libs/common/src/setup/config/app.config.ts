import { ConfigType, registerAs } from '@nestjs/config';
import Joi from 'joi';

const config = registerAs('app', () => ({
  port: +process.env.APP_PORT,
  paginate: {
    perPage: +process.env.APP_PAGINATE_PER_PAGE,
  },
}));

export const AppConfig = config.KEY;

export type AppConfig = ConfigType<typeof config>;

export const AppConfigSchema = {
  APP_PORT: Joi.number().default(3000),
  APP_PAGINATE_PER_PAGE: Joi.number().default(50),
};

export default config;
