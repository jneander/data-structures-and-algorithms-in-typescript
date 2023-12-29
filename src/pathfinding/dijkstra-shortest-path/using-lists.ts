import type {WeightedAdjacencyList} from './types'

export function shortestPath(
  list: WeightedAdjacencyList,
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
  const dists = new Array(list.length).fill(Number.POSITIVE_INFINITY)

  dists[startIndex] = 0

  let currentIndex
  let adjacentNodes
  let currentDist

  while (hasUnvisited(seen, dists)) {
    currentIndex = getLowestUnvisited(seen, dists)
    seen[currentIndex] = true

    adjacentNodes = list[currentIndex]

    for (const {to, weight} of adjacentNodes) {
      currentDist = dists[currentIndex] + weight

      if (dists[to] > currentDist) {
        dists[to] = currentDist
        prev[to] = currentIndex
      }
    }
  }

  if (prev[endIndex] === -1) {
    return null
  }

  const path: number[] = []
  currentIndex = endIndex

  while (prev[currentIndex] !== -1) {
    path.unshift(currentIndex)
    currentIndex = prev[currentIndex]
  }

  path.unshift(startIndex)

  return path
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((v, i) => !v && dists[i] < Number.POSITIVE_INFINITY)
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let index = -1
  let lowestDist = Number.POSITIVE_INFINITY

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) {
      continue
    }

    if (lowestDist > dists[i]) {
      lowestDist = dists[i]
      index = i
    }
  }

  return index
}
