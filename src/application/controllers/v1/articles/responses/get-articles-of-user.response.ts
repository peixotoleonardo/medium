import { ApiProperty } from '@nestjs/swagger';

import { PaginateResponse } from '@app/common/responses/paginate.response';

export class Article {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly body: string;

  @ApiProperty()
  readonly tags?: string[];

  constructor(id: number, title: string, body: string, tags?: string[]) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tags = tags;
  }
}

export class GetArticlesOfUserResponse extends PaginateResponse<Article> {
  @ApiProperty({
    type: [Article],
  })
  readonly items: Article[];

  constructor(
    items: Article[],
    nextPage: number,
    prevPage: number,
    lastPage: number,
    count: number,
    currentPage: number,
    perPage: number,
  ) {
    super(nextPage, prevPage, lastPage, count, currentPage, perPage);
    this.items = items;
  }
}
