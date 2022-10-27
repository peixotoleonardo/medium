/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';

import { ArticleRepository } from '@medium/infra/typeorm/repositories/article.repository';
import { TagRepository } from '@medium/infra/typeorm/repositories/tag.repository';
import { UserRepository } from '@medium/infra/typeorm/repositories/user.repository';
import { ArticleSchema } from '@medium/infra/typeorm/schemas/article.schema';
import { TagSchema } from '@medium/infra/typeorm/schemas/tag.schema';
import { UserSchema } from '@medium/infra/typeorm/schemas/user.schema';

@Module({
  imports: [TypeOrm.forFeature([UserSchema, ArticleSchema, TagSchema])],
  providers: [UserRepository, ArticleRepository, TagRepository],
  exports: [UserRepository, ArticleRepository, TagRepository],
})
export class TypeOrmModule {}
