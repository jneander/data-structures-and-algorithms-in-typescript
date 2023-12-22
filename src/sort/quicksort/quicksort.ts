function partition(array: unknown[], startIndex: number, endIndex: number): number {
  const pivotValue = array[endIndex]
  let pivotIndex = startIndex - 1
  let tmp

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] < pivotValue) {
      pivotIndex++
      tmp = array[i]
      array[i] = array[pivotIndex]
      array[pivotIndex] = tmp
    }
  }

  pivotIndex++
  array[endIndex] = array[pivotIndex]
  array[pivotIndex] = pivotValue

  return pivotIndex
}

function partitionAndSort(array: unknown[], startIndex: number, endIndex: number): void {
  if (startIndex >= endIndex) {
    return
  }

  const pivotIndex = partition(array, startIndex, endIndex)

  partitionAndSort(array, startIndex, pivotIndex - 1)
  partitionAndSort(array, pivotIndex + 1, endIndex)
}

export function sortArray(array: unknown[]): void {
  partitionAndSort(array, 0, array.length - 1)
}
