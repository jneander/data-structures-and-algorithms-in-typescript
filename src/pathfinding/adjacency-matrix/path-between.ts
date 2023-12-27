import type {AdjacencyMatrix} from './types'

export function pathBetweenBreadth(
  matrix: AdjacencyMatrix,
  startIndex: number,
  endIndex: number,
): number[] | null {
  if (startIndex < 0 || endIndex < 0) {
    return null
  }

  if (startIndex >= matrix.length || endIndex >= matrix.length) {
    return null
  }

  const seen = new Array(matrix.length).fill(false)
  const prev = new Array(matrix.length).fill(-1)

  const queue = [startIndex]

  let currentIndex
  let adjacentIndices

  do {
    currentIndex = queue.shift()

    if (currentIndex === endIndex) {
      break
    }

    adjacentIndices = matrix[currentIndex]

    for (let i = 0; i < adjacentIndices.length; i++) {
      if (!adjacentIndices[i]) {
        continue
      }

      if (seen[i]) {
        continue
      }

      seen[i] = true
      prev[i] = currentIndex
      queue.push(i)
    }
  } while (queue.length)

  if (prev[endIndex] === -1) {
    return null
  }

  const path = []
  currentIndex = endIndex

  do {
    path.unshift(currentIndex)
    currentIndex = prev[currentIndex]
  } while (prev[currentIndex] !== -1)

  path.unshift(startIndex)

  return path
}

export function pathBetweenDepth(
  matrix: AdjacencyMatrix,
  startIndex: number,
  endIndex: number,
): number[] | null {
  if (startIndex < 0 || endIndex < 0) {
    return null
  }

  if (startIndex >= matrix.length || endIndex >= matrix.length) {
    return null
  }

  const path: number[] = []
  const seen = new Array(matrix.length).fill(false)

  if (walkDepth(matrix, startIndex, endIndex, seen, path)) {
    return path
  }

  return null
}

function walkDepth(
  matrix: AdjacencyMatrix,
  currentIndex: number,
  endIndex: number,
  seen: boolean[],
  path: number[],
): boolean {
  if (currentIndex === endIndex) {
    path.push(currentIndex)

    return true
  }

  if (seen[currentIndex]) {
    return false
  }

  seen[currentIndex] = true
  path.push(currentIndex)

  const adjacentIndices = matrix[currentIndex]

  for (let i = 0; i < adjacentIndices.length; i++) {
    if (adjacentIndices[i] && walkDepth(matrix, i, endIndex, seen, path)) {
      return true
    }
  }

  path.pop()

  return false
}
