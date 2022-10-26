import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateArticleRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly body: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({
    maximum: 100,
  })
  readonly title: string;

  @IsArray()
  @IsOptional()
  @MaxLength(100, { each: true })
  @ApiPropertyOptional({ maximum: 100 })
  readonly tags?: string[];

  constructor(body: string, title: string, tags?: string[]) {
    this.body = body;
    this.title = title;
    this.tags = tags;
  }
}
