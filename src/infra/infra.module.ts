/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config, schema } from '@medium/infra/config';
import { TypeOrmConfig } from '@medium/infra/config/typeorm.config';
import { providers, providersToExport } from '@medium/infra/providers';
import { TypeOrmModule as DatabaseModule } from '@medium/infra/typeorm/typeorm.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
      validationSchema: schema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [TypeOrmConfig],
      useFactory: (config: TypeOrmConfig) => config,
    }),
    DatabaseModule,
  ],
  providers,
  exports: providersToExport,
})
export class InfraModule {}
