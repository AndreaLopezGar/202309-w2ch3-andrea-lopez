import { arrayLength, arrayPush, arrayPop } from './array.method.js';

describe('arrayLength', () => {
  test('Should be', () => {
    const array = [1, 2, 3, 4];
    const result = arrayLength(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

describe('arrayPush', () => {
  test('The result should return one plus element to the array ', () => {
    const array = [1, 2, 3, 4];
    const expectedResult = 5;
    // eslint-disable-next-line no-undef
    const result = arrayPush(array, expectedResult);
    expect(result).toBe(expectedResult);
  });
});

describe('arrayPop', () => {
  test('The result should return the last index of the element', () => {
    const array = [1, 2, 3, 4];
    const expectedResult = 4;
    const result = arrayPop(array);
    expect(result).toBe(expectedResult);
  });
});

// Solo me ha dado tiempo a estas tres, pero creo que lo he pillado jejeje
