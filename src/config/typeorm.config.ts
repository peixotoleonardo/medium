/* istanbul ignore file */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Joi from 'joi';

const config = registerAs(
  'typeorm',
  () =>
    ({
      type: 'postgres',
      host: process.env.TYPE_ORM_HOST,
      port: +process.env.TYPE_ORM_PORT,
      username: process.env.TYPE_ORM_USERNAME,
      password: process.env.TYPE_ORM_PASSWORD,
      database: process.env.TYPE_ORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    } as TypeOrmModuleOptions),
);

export const TypeOrmConfig = config.KEY;

export type TypeOrmConfig = TypeOrmModuleOptions;

export const TypeOrmConfigSchema = {
  TYPE_ORM_HOST: Joi.string().required(),
  TYPE_ORM_PORT: Joi.string().required(),
  TYPE_ORM_USERNAME: Joi.string().required(),
  TYPE_ORM_PASSWORD: Joi.string().required(),
  TYPE_ORM_DATABASE: Joi.string().required(),
};

export default config;
