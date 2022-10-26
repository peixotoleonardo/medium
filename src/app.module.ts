import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplicationModule } from '@medium/application/application.module';
import { config, schema } from '@medium/config';
import { TypeOrmConfig } from '@medium/config/typeorm.config';
import { InfraModule } from '@medium/infra/infra.module';

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
    ApplicationModule,
    InfraModule,
  ],
})
export class AppModule {}
