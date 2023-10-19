import {
  arrayLength,
  arrayPush,
  arrayPop,
  arrayShift,
} from './array.method.js';

describe('arrayLength', () => {
  test('Array length should be 4', () => {
    const array = [1, 2, 3, 4];
    const result = arrayLength(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });

  test('Array length should be 3', () => {
    const array = [1, 2, 3];
    const result = arrayLength(array);
    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  });
});

describe('arrayPush', () => {
  test('ArrayPush should be 5 ', () => {
    const array = [1, 2, 3, 4];
    const expectedResult = 5;
    const result = arrayPush(array, expectedResult);
    expect(result).toBe(expectedResult);
  });

  test('Array lenght should be 4 now ', () => {
    const array = [1, 2, 3, 4];
    const expectedResult = 5;
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
  test('The value of the array should be cat', () => {
    const array = ['monkey', 'parrot', 'dog', 'cat'];
    const expectedResult = 'cat';
    const result = arrayPop(array);
    expect(result).toBe(expectedResult);
  });
});

describe('arrayShift', () => {
  test('The result should return the first index of the element', () => {
    const array = ['1', 2, 'cat', true];
    const expectedResult = '1';
    const result = arrayShift(array);
    expect(result).toBe(expectedResult);
  });
  test('The result should be one', () => {
    const array = [1, 56, 'robot', 6];
    const expectedResult = 1;
    const result = arrayShift(array);
    expect(result).toBe(expectedResult);
  });
});
