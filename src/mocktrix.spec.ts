import { expect, test } from 'bun:test';
import { mocktrix } from './mocktrix';
import { oneOf, range } from './operators';

enum Sex {
  MALE = 0,
  FEMALE = 1,
  UNKNOWN = 2,
}

interface Person {
  name: string;
  age: number;
  sex: Sex;
}

test('mocktrix', () => {
  expect(mocktrix<Person>({
    name: 'John Doe',
    age: range(1, 3),
    sex: oneOf(Sex.MALE, Sex.FEMALE),
  })).toMatchSnapshot();
});
