import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponse {
  @ApiProperty()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
