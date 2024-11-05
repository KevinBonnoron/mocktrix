import type { GeneratorCreator } from '../types';

export const isGeneratorCreator = <T>(
  value: unknown,
): value is GeneratorCreator<T> => {
  if (typeof value !== 'function') {
    return false;
  }

  const generator = value();
  return generator && generator.constructor.name === 'GeneratorFunction';
}
