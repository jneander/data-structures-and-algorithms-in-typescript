export function sortArray(array: unknown[]): void {
  let tmp

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        tmp = array[j]
        array[j] = array[i]
        array[i] = tmp
      }
    }
  }
}
