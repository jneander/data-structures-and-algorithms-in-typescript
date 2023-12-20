export function findFirstBreakIndex(tests: boolean[]): number {
  const jumpAmount = Math.sqrt(tests.length) | 0

  let lastUnbrokenIndex = 0

  while (lastUnbrokenIndex < tests.length && !tests[lastUnbrokenIndex]) {
    lastUnbrokenIndex += jumpAmount
  }

  lastUnbrokenIndex -= jumpAmount

  for (let i = lastUnbrokenIndex; i < tests.length; i++) {
    if (tests[i]) {
      return i
    }
  }

  return -1
}

export function findMinimumHeight(
  testFn: (height: number) => boolean,
  maxHeight: number,
  stepSize: number,
): number | null {
  let lastUnbrokenHeight = 0

  while (lastUnbrokenHeight <= maxHeight && !testFn(lastUnbrokenHeight)) {
    lastUnbrokenHeight += stepSize
  }

  lastUnbrokenHeight -= stepSize

  for (let height = lastUnbrokenHeight; height <= maxHeight; height += stepSize) {
    if (testFn(height)) {
      return height
    }
  }

  return null
}
