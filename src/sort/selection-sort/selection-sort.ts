export function sortArray(array: unknown[]): void {
  let tmp
  let smallestIndex

  for (let i = 0; i < array.length - 1; i++) {
    smallestIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j
      }
    }

    tmp = array[i]
    array[i] = array[smallestIndex]
    array[smallestIndex] = tmp
  }
}
