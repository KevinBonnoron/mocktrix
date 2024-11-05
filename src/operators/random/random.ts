import type { GeneratorCreator } from '../../types';

/**
 * Return a randomly picked value from `values`
 * @param values list of available values
 * @returns 
 */
export function random<T>(...values: T[]): GeneratorCreator<T> {
  return function* () {
    while (true) {
      yield values[Math.floor(Math.random() * values.length)];
    }
  };
}
