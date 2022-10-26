import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginateResponse<T> {
  abstract readonly items: T[];

  @ApiProperty()
  readonly nextPage: number;

  @ApiProperty()
  readonly prevPage: number;

  @ApiProperty()
  readonly lastPage: number;

  @ApiProperty()
  readonly count: number;

  @ApiProperty()
  readonly currentPage: number;

  @ApiProperty()
  readonly perPage: number;

  constructor(
    nextPage: number,
    prevPage: number,
    lastPage: number,
    count: number,
    currentPage: number,
    perPage: number,
  ) {
    this.nextPage = nextPage;
    this.prevPage = prevPage;
    this.lastPage = lastPage;
    this.count = count;
    this.currentPage = currentPage;
    this.perPage = perPage;
  }
}
