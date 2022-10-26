export interface Class<T> extends Function {
  new (...args: unknown[]): T;
}
