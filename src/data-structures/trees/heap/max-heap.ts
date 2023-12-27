export class MaxHeap<T> {
  private data: T[]
  private _length: number

  constructor() {
    this.data = []
    this._length = 0
  }

  get length(): number {
    return this._length
  }

  insert(value: T): void {
    this.data[this._length] = value
    this.heapifyUp(this._length)
    this._length++
  }

  delete(): T | undefined {
    if (this._length === 0) {
      return
    }

    const value = this.data[0]

    this._length--
    this.data[0] = this.data[this._length]
    this.data.length = this._length
    this.heapifyDown(0)

    return value
  }

  private heapifyUp(index: number): void {
    if (index <= 0) {
      return
    }

    const indexValue = this.data[index]
    const parentIndex = this.getParentIndex(index)
    const parentValue = this.data[parentIndex]

    if (indexValue <= parentValue) {
      return
    }

    this.data[parentIndex] = indexValue
    this.data[index] = parentValue
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

    const indexValue = this.data[index]
    const leftValue = this.data[leftIndex]

    const rightIndex = this.getRightIndex(index)
    const rightValue = this.data[rightIndex]

    if (rightValue > leftValue && rightValue > indexValue) {
      this.data[index] = rightValue
      this.data[rightIndex] = indexValue
      this.heapifyDown(rightIndex)

      return
    }

    if (leftValue > indexValue) {
      this.data[index] = leftValue
      this.data[leftIndex] = indexValue
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
