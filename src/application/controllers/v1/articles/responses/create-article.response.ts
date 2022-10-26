import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleResponse {
  @ApiProperty()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
