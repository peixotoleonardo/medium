import { Class } from '@app/common/types/class';

export const factoryProvider =
  <T>(target: Class<T>) =>
  (...args: unknown[]): T =>
    Reflect.construct(target, args);
