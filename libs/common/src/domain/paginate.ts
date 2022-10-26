import { BaseEntity } from '@app/common/domain/base-entity';

export class Paginate<T extends BaseEntity> {
  readonly nextPage: number;
  readonly prevPage: number;
  readonly lastPage: number;

  constructor(
    readonly items: T[],
    readonly count: number,
    readonly currentPage: number,
    readonly perPage: number,
  ) {
    this.lastPage = Math.ceil(this.count / this.perPage);
    this.nextPage =
      this.currentPage + 1 > this.lastPage ? null : this.currentPage + 1;
    this.prevPage = this.currentPage - 1 < 1 ? null : this.currentPage - 1;
  }
}
