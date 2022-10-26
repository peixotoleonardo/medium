export abstract class BaseEntity {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
