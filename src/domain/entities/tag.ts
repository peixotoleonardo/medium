import { BaseEntity } from '@app/common/domain/base-entity';

export class Tag extends BaseEntity {
  constructor(private _value: string) {
    super();
  }

  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
}
