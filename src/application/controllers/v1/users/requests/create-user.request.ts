import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({ maximum: 150 })
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({ maximum: 150 })
  readonly email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
