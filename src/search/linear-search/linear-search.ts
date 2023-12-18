export function valueExistsInArray<T>(value: T, array: T[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }

  return false
}

export function indexOfValueInArray<T>(value: T, array: T[]): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i
    }
  }

  return -1
}
