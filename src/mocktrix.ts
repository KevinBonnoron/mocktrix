import type { GeneratorCreator } from './types';
import { isGeneratorCreator } from './utils';

type Definition<T extends object> = {
  [K in keyof T]: GeneratorCreator<T[K]> | T[K];
};

function recursiveMock<T extends object>(
  definition: Partial<Definition<T>>,
  element: T = {} as T,
): T[] {
  const [property] = Object.keys(definition) as (keyof T)[];
  if (!property) {
    return [element];
  }

  const generatorCreatorOrValue = definition[property];
  delete definition[property];

  const elements: T[] = [];
  if (isGeneratorCreator(generatorCreatorOrValue)) {
    for (const value of generatorCreatorOrValue()) {
      elements.push(
        ...recursiveMock({ ...definition }, { ...element, [property]: value }),
      );
    }
  } else {
    elements.push(
      ...recursiveMock(
        { ...definition },
        { ...element, [property]: generatorCreatorOrValue },
      ),
    );
  }

  return elements;
}

export const mocktrix = <T extends object>(
  definition: Partial<Definition<T>>,
) => recursiveMock({ ...definition });
