import { expect, test } from 'bun:test';
import { random } from './random';

test('random', () => {
  const generator = random(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  expect(generator().next().value).toBeNumber();
});
