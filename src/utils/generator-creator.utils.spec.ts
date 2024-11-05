import { expect, test } from 'bun:test';
import { isGeneratorCreator } from './generator-creator.utils';

function classicGeneratorCreator () {
  return function* generator() {
    yield 1;
  }
}

const arrowGeneratorCreator = () => {
  return function* generator() {
    yield 1;
  }
}

function classicFunction() {
  return 1;
}

const arrowFunction = () => {
  return 1;
}

test('GeneratorCreatorUtils', () => {
  expect(isGeneratorCreator(classicGeneratorCreator)).toBeTruthy();
  expect(isGeneratorCreator(arrowGeneratorCreator)).toBeTruthy();
  expect(isGeneratorCreator(classicFunction)).toBeFalsy();
  expect(isGeneratorCreator(arrowFunction)).toBeFalsy();
});
