import type { GeneratorCreator } from '../../types';

/**
 * Return element in sequence
 * @param values
 * @returns
 */
export function oneOf<T>(...values: T[]): GeneratorCreator<T> {
  return function* () {
    let index = 0;
    while (index < values.length) {
      yield values[index++];
    }
  };
}
