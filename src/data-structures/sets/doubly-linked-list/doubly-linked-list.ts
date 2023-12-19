export class DoublyLinkedList<T> {
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

  append(item: T): void {
    const prev = this.tail

    this.tail = {
      value: item,
      prev,
    }

    if (prev) {
      prev.next = this.tail
    } else {
      this.head = this.tail
    }

    this._length++
  }

  prepend(item: T): void {
    const next = this.head

    this.head = {
      next,
      value: item,
    }

    if (next) {
      next.prev = this.head
    } else {
      this.tail = this.head
    }

    this._length++
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this._length) {
      return
    }

    if (index === 0) {
      const next = this.head

      this.head = {
        value: item,
        next,
      }

      if (next) {
        next.prev = this.head
      }
    } else {
      let previous = this.head
      let current = previous.next

      for (let i = 1; i < index; i++) {
        previous = current
        current = current?.next
      }

      previous.next = {
        value: item,
        next: current,
        prev: previous,
      }

      if (current) {
        current.prev = previous.next
      } else {
        this.tail = previous.next
      }
    }

    this._length++
  }

  remove(item: T): T | undefined {
    let node = this.head

    while (node && node.value !== item) {
      node = node.next
    }

    if (!node) {
      return
    }

    return this.removeNode(node)
  }

  removeAt(index: number): T | undefined {
    const node = this.getNodeAtIndex(index)

    if (!node) {
      return
    }

    return this.removeNode(node)
  }

  get(index: number): T | undefined {
    return this.getNodeAtIndex(index)?.value
  }

  reverse(): void {
    if (this._length <= 1) {
      return
    }

    let previous
    let current = this.head
    let next

    while (current) {
      next = current.next
      current.next = previous
      current.prev = next
      previous = current
      current = next
    }

    this.tail = this.head
    this.head = previous
  }

  *iterateForward(): Generator<T> {
    let current = this.head

    while (current) {
      yield current.value
      current = current.next
    }
  }

  *iterateReverse(): Generator<T> {
    let current = this.tail

    while (current) {
      yield current.value
      current = current.prev
    }
  }

  private removeNode(node: Node<T>): T {
    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    if (this.head === node) {
      this.head = node.next
    }

    if (this.tail === node) {
      this.tail = node.prev
    }

    this._length--

    return node.value
  }

  private getNodeAtIndex(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) {
      return
    }

    let node = this.head

    for (let i = 1; i <= index && node; i++) {
      node = node.next
    }

    return node
  }
}

type Node<T> = {
  prev?: Node<T>
  next?: Node<T>
  value: T
}
