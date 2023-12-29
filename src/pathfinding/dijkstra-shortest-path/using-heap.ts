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

  const distHeap = new DistHeap(list.length)
  const prev = new Array(list.length).fill(-1)

  distHeap.updateDist(startIndex, 0)

  let currentIndex: number
  let adjacentNodes
  let currentDist

  while (distHeap.length) {
    currentIndex = distHeap.delete()
    adjacentNodes = list[currentIndex]

    for (const {to, weight} of adjacentNodes) {
      if (!distHeap.containsDist(to)) {
        continue
      }

      currentDist = distHeap.getDist(currentIndex) + weight

      if (distHeap.getDist(to) > currentDist) {
        distHeap.updateDist(to, currentDist)
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

type DistDatum = {
  graphIndex: number
  heapIndex: number
  dist: number
}

class DistHeap {
  private fullData: DistDatum[]
  private data: DistDatum[]
  private _length: number

  constructor(length: number) {
    this.fullData = new Array(length)

    for (let i = 0; i < length; i++) {
      this.fullData[i] = {
        graphIndex: i,
        heapIndex: i,
        dist: Number.POSITIVE_INFINITY,
      }
    }

    this.data = this.fullData.slice()

    this._length = length
  }

  get length(): number {
    return this._length
  }

  containsDist(index: number): boolean {
    return this.fullData[index].heapIndex !== -1
  }

  getDist(index: number): number {
    return this.fullData[index].dist
  }

  updateDist(index: number, dist: number): void {
    const node = this.fullData[index]
    node.dist = dist

    // Since distances are only decreased, only heapify up.
    this.heapifyUp(node.heapIndex)
  }

  delete(): number | undefined {
    if (this._length === 0) {
      return undefined
    }

    const node = this.data[0]
    node.heapIndex = -1

    this._length--
    this.data[0] = this.data[this._length]
    this.data[0].heapIndex = 0
    this.data.length = this._length
    this.heapifyDown(0)

    return node.graphIndex
  }

  private heapifyUp(index: number): void {
    if (index <= 0) {
      return
    }

    const indexDatum = this.data[index]
    const parentIndex = this.getParentIndex(index)
    const parentDatum = this.data[parentIndex]

    if (indexDatum.dist >= parentDatum.dist) {
      return
    }

    parentDatum.heapIndex = index
    indexDatum.heapIndex = parentIndex

    this.data[index] = parentDatum
    this.data[parentIndex] = indexDatum

    this.heapifyUp(parentIndex)
  }

  private heapifyDown(index: number): void {
    if (index >= this._length) {
      return
    }

    const leftIndex = this.getLeftIndex(index)

    if (leftIndex >= this._length) {
      return
    }

    const indexDatum = this.data[index]
    const leftDatum = this.data[leftIndex]

    const rightIndex = this.getRightIndex(index)
    const rightDatum = this.data[rightIndex]

    if (rightDatum?.dist < leftDatum.dist && rightDatum.dist < indexDatum.dist) {
      rightDatum.heapIndex = index
      indexDatum.heapIndex = rightIndex

      this.data[index] = rightDatum
      this.data[rightIndex] = indexDatum

      this.heapifyDown(rightIndex)

      return
    }

    if (leftDatum.dist < indexDatum.dist) {
      leftDatum.heapIndex = index
      indexDatum.heapIndex = leftIndex

      this.data[index] = leftDatum
      this.data[leftIndex] = indexDatum

      this.heapifyDown(leftIndex)
    }
  }

  private getParentIndex(index: number): number {
    return ((index - 1) / 2) | 0
  }

  private getLeftIndex(index: number): number {
    return index * 2 + 1
  }

  private getRightIndex(index: number): number {
    return index * 2 + 2
  }
}
