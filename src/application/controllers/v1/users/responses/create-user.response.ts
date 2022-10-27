import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponse {
  @ApiProperty()
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
