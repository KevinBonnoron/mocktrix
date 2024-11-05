import type { GeneratorCreator } from '../../types';

/**
 * Return next number element with passed `step`
 * @param min lower value (included)
 * @param max higher value (included)
 * @param step increment value (default 1)
 * @returns 
 */
export function range(
  min: number,
  max: number,
  step = 1,
): GeneratorCreator<number> {
  return function* () {
    let value = min;
    while (value <= max) {
      yield value;
      value += step;
    }
  };
}
