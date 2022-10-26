import { ApiProperty } from '@nestjs/swagger';

export class CreateUseResponse {
  @ApiProperty()
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
