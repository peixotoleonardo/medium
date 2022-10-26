import { BaseEntity } from '@app/common/domain/base-entity';
import { Tag } from '@medium/domain/entities/tag';
import { User } from '@medium/domain/entities/user';

export class Article extends BaseEntity {
  constructor(
    private _title: string,
    private _body: string,
    private _author: User,
    private _tags?: Tag[],
  ) {
    super();
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get body() {
    return this._body;
  }
  set body(body: string) {
    this._body = body;
  }

  get author() {
    return this._author;
  }
  set author(author: User) {
    this._author = author;
  }

  get tags() {
    return this._tags;
  }
  set tags(tags: Tag[]) {
    this._tags = tags;
  }
}
