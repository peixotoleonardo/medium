import { BaseEntity } from '@app/common/domain/base-entity';
import { Article } from '@medium/domain/entities/article';

export class User extends BaseEntity {
  constructor(
    private _name: string,
    private _email: string,
    private _articles?: Article[],
  ) {
    super();
  }

  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }
  get email() {
    return this._email;
  }

  set articles(articles: Article[]) {
    this._articles = articles;
  }

  get articles() {
    return this._articles;
  }
}
