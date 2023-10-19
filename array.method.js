export function arrayLength(array) {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const element of array) {
    count++;
  }

  return count;
}

export function arrayPush(array, expectedResult) {
  const arraySize = array.length;
  const lastValue = arraySize + 1;
  array[lastValue] = expectedResult;
  return lastValue;
}

export function arrayPop(array) {
  const arraySizePop = arrayLength(array);
  const lastValue = arraySizePop - 1;
  return array[lastValue];
}

export function arrayShift(array) {
  const arrayFirstWord = array[0];
  return arrayFirstWord;
}
