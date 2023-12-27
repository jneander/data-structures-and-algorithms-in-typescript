import type {AdjacencyList} from './types'

export function pathBetweenBreadth(
  list: AdjacencyList,
  startIndex: number,
  endIndex: number,
): number[] | null {
  if (startIndex < 0 || endIndex < 0) {
    return null
  }

  if (startIndex >= list.length || endIndex >= list.length) {
    return null
  }

  const seen = new Array(list.length).fill(false)
  const prev = new Array(list.length).fill(-1)

  seen[startIndex] = true
  const queue = [startIndex]

  let currentIndex
  let adjacentNodes

  do {
    currentIndex = queue.shift()

    if (currentIndex === endIndex) {
      break
    }

    adjacentNodes = list[currentIndex]

    for (const {to} of adjacentNodes) {
      if (seen[to]) {
        continue
      }

      seen[to] = true
      prev[to] = currentIndex
      queue.push(to)
    }
  } while (queue.length)

  if (prev[endIndex] === -1) {
    return null
  }

  const path = []
  currentIndex = endIndex

  while (prev[currentIndex] !== -1) {
    path.unshift(currentIndex)
    currentIndex = prev[currentIndex]
  }

  path.unshift(startIndex)

  return path
}

export function pathBetweenDepth(
  list: AdjacencyList,
  startIndex: number,
  endIndex: number,
): number[] | null {
  if (startIndex < 0 || endIndex < 0) {
    return null
  }

  if (startIndex >= list.length || endIndex >= list.length) {
    return null
  }

  const path: number[] = []
  const seen = new Array(list.length).fill(false)

  walkDepth(list, startIndex, endIndex, seen, path)

  if (path.length) {
    return path
  }

  return null
}

function walkDepth(
  list: AdjacencyList,
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

  const adjacentNodes = list[currentIndex]

  for (const {to} of adjacentNodes) {
    if (walkDepth(list, to, endIndex, seen, path)) {
      return true
    }
  }

  path.pop()

  return false
}
