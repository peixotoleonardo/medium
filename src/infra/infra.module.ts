/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';

import { providers, providersToExport } from '@medium/infra/providers';
import { TypeOrmModule } from '@medium/infra/typeorm/typeorm.module';

@Global()
@Module({
  imports: [TypeOrmModule],
  providers,
  exports: providersToExport,
})
export class InfraModule {}
