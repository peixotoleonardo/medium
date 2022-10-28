/* istanbul ignore file */
import { Module } from '@nestjs/common';

import { ApplicationModule } from '@medium/application/application.module';
import { InfraModule } from '@medium/infra/infra.module';

@Module({
  imports: [ApplicationModule, InfraModule],
})
export class AppModule {}
