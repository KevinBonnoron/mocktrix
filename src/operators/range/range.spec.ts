import { expect, test } from 'bun:test';
import { range } from './range';

test('range', () => {
  const generator = range(0, 10);
  expect([...generator()]).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
