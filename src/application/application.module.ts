import { Module } from '@nestjs/common';

import { controllersV1 } from '@medium/application/controllers/v1';

@Module({
  controllers: [...controllersV1],
})
export class ApplicationModule {}
