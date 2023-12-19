export class SinglyLinkedList<T> {
  private head: Node<T> | null
  private _length: number

  constructor() {
    this.head = null

    this._length = 0
  }

  get length(): number {
    return this._length
  }

  append(item: T): void {
    const node = {
      value: item,
    }

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this._length++
  }

  prepend(item: T): void {
    this.head = {
      next: this.head,
      value: item,
    }

    this._length++
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this._length) {
      return
    }

    if (index === 0) {
      this.head = {
        value: item,
        next: this.head,
      }
    } else {
      let previous = this.head
      let current = previous.next

      for (let i = 1; i < index; i++) {
        previous = current
        current = current?.next
      }

      if (previous) {
        previous.next = {
          value: item,
          next: current,
        }
      }
    }

    this._length++
  }

  remove(item: T): T | undefined {
    if (this.head?.value === item) {
      this.head = this.head?.next
      this._length--

      return item
    }

    let previous = this.head
    let current = previous.next

    while (current && current.value !== item) {
      previous = current
      current = current.next
    }

    if (current?.value === item) {
      previous.next = current.next
      this._length--

      return item
    }

    return
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return
    }

    let value = this.head.value

    if (index === 0) {
      this.head = this.head.next
    } else {
      let previous = this.head
      let current = previous.next

      for (let i = 1; i < index; i++) {
        previous = current
        current = previous.next
      }

      previous.next = current.next
      value = current.value
    }

    this._length--

    return value
  }

  get(index: number): T | undefined {
    let current = this.head

    for (let i = 1; i <= index && current; i++) {
      current = current?.next
    }

    return current?.value
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
      previous = current
      current = next
    }

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
    for (let i = this._length - 1; i >= 0; i--) {
      yield this.get(i)
    }
  }
}

type Node<T> = {
  next?: Node<T>
  value: T
}
