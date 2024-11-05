import { expect, test } from 'bun:test';
import { oneOf } from './one-of';

test('oneOf', () => {
  const generator = oneOf('a', 'b');
  expect([...generator()]).toStrictEqual(['a', 'b']);
});
