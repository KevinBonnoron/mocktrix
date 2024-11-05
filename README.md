# Mocktrix

Toolset for generating matrix of values.

## Examples

```typescript
import { mocktrix, oneOf, range } from 'mocktrix';

enum Sex {
  MALE = 0,
  FEMALE = 1,
}

interface Person {
  name: string;
  age: number;
  sex: Sex;
}

const data = mocktrix<Person>({
  name: 'John Doe',
  age: range(1, 3),
  sex: oneOf(Sex.MALE, Sex.FEMALE),
});

console.log(data);
/* [
  { "age": 1, "name": "John Doe", "sex": 0 },
  { "age": 1, "name": "John Doe", "sex": 1 },
  { "age": 2, "name": "John Doe", "sex": 0 },
  { "age": 2, "name": "John Doe", "sex": 1 },
  { "age": 3, "name": "John Doe", "sex": 0 },
  { "age": 3, "name": "John Doe", "sex": 1 },
]
*/
```
