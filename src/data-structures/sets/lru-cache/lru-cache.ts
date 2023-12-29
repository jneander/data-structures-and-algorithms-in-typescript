export class LRUCache<K, V> {
  private head: Node<K, V> | null
  private tail: Node<K, V> | null
  private lookup: Map<K, Node<K, V>>
  private capacity: number
  private _length: number

  constructor(capacity: number) {
    this.head = null
    this.tail = null
    this.lookup = new Map()
    this.capacity = capacity
    this._length = 0
  }

  get length(): number {
    return this._length
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key)

    if (node != null) {
      node.value = value
      this.moveNodeToHead(node)

      return
    }

    node = {
      key,
      value,
      next: this.head,
    }

    if (this.head) {
      this.head.prev = node
    } else {
      this.tail = node
    }

    this.head = node
    this.lookup.set(key, node)

    if (this._length < this.capacity) {
      this._length++

      return
    }

    const lruNode = this.lookup.get(this.tail.key)
    this.tail = lruNode.prev
    this.lookup.delete(lruNode.key)

    if (this.tail) {
      this.tail.next = null
    }
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key)

    if (node == null) {
      return
    }

    this.moveNodeToHead(node)

    return node.value
  }

  private moveNodeToHead(node: Node<K, V>): void {
    if (this.head === node) {
      return
    }

    if (this.tail === node) {
      this.tail = node.prev
    }

    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    node.prev = null
    this.head = node
  }
}

type Node<K, V> = {
  key: K
  value: V
  next?: Node<K, V> | null
  prev?: Node<K, V> | null
}
