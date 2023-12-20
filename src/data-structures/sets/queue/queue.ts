export class Queue<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private _length: number

  constructor() {
    this.head = null
    this.tail = null

    this._length = 0
  }

  get length(): number {
    return this._length
  }

  enqueue(item: T): void {
    const node = {
      value: item,
    }

    if (this.tail) {
      this.tail.next = node
      this.tail = node
    } else {
      this.tail = node
      this.head = node
    }

    this._length++
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return
    }

    const value = this.head.value
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }

    this._length--

    return value
  }
}

type Node<T> = {
  value: T
  next?: Node<T>
}
