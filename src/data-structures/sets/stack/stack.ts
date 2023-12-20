export class Stack<T> {
  private head: Node<T> | null
  private _length: number

  constructor() {
    this.head = null

    this._length = 0
  }

  get length(): number {
    return this._length
  }

  push(item: T): void {
    this.head = {
      value: item,
      next: this.head,
    }

    this._length++
  }

  pop(): T | undefined {
    if (!this.head) {
      return
    }

    const value = this.head.value
    this.head = this.head.next
    this._length--

    return value
  }
}

type Node<T> = {
  value: T
  next?: Node<T>
}
