export function valueExistsInArray<T>(value: T, array: T[]): boolean {
  return indexOfValueInArray(value, array) !== -1
}

export function indexOfValueInArray<T>(value: T, array: T[]): number {
  let startIndex = 0
  let endIndex = array.length - 1
  let midIndex

  while (endIndex >= startIndex) {
    midIndex = (startIndex + (endIndex - startIndex) / 2) | 0

    if (array[midIndex] === value) {
      return midIndex
    }

    if (array[midIndex] < value) {
      startIndex = midIndex + 1
    } else {
      endIndex = midIndex - 1
    }
  }

  return -1
}
