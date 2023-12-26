export class BinarySearchTree<T> {
  private root: Node<T> | null
  private _size: number

  constructor() {
    this.root = null

    this._size = 0
  }

  get size(): number {
    return this._size
  }

  insert(value: T): void {
    if (this.root == null) {
      this.root = {value}
      this._size++

      return
    }

    let current = this.root
    let next = this.root

    while (next) {
      current = next
      next = value <= current.value ? current.left : current.right
    }

    if (value <= current.value) {
      current.left = {value}
    } else {
      current.right = {value}
    }

    this._size++
  }

  delete(value: T): void {
    let matchParent
    let match = this.root

    while (match && match.value !== value) {
      matchParent = match
      match = value <= matchParent.value ? matchParent.left : matchParent.right
    }

    if (match == null) {
      return
    }

    let replacement

    if (match.left && match.right) {
      /*
       * The node to delete has both left and right branches, which need to
       * transfer to the replacement node. The replacement must come from within
       * one of these branches. For simplicity, the left branch is arbitrarily
       * chosen. A more efficient choice would depend on additional knowledge of
       * the tree, such as the height of each branch.
       */
      const leftChild = match.left

      if (leftChild.right) {
        /*
         * The left child has its own right branch, which cannot be replaced by
         * the deleted node's right branch. A different node must be used.
         *
         * Its value must be equal to or greater than all nodes descending from
         * this left child. The right-most descendent of this child satisfies
         * this criteria. Pluck it from the subtree and set it as the new
         * replacement. Then assign the deleted node's branches to it.
         */
        replacement = this.pluckLeaf(leftChild, leftChild.right)
        replacement.left = match.left
        replacement.right = match.right
      } else {
        /*
         * The left child has no right branch, which means the deleted node's
         * right branch can be directly assigned to it.
         */
        replacement = leftChild
        replacement.right = match.right
      }
    } else {
      /*
       * The deleted node has 0 or 1 branches. Use whichever child node exists
       * (if one does) as the replacement.
       */
      replacement = match.left ?? match.right
    }

    if (matchParent.left === match) {
      matchParent.left = replacement
    } else {
      matchParent.right = replacement
    }

    this._size--
  }

  contains(value: T): boolean {
    return this.findNodeWithValue(value) != null
  }

  *iterateInorder(): Generator<T> {
    function* iterate(node: Node<T> | null): Generator<T> {
      if (node == null) {
        return
      }

      yield* iterate(node.left)
      yield node.value
      yield* iterate(node.right)
    }

    yield* iterate(this.root)
  }

  private findNodeWithValue(value: T): Node<T> | undefined {
    let node = this.root

    while (node && node.value !== value) {
      node = value <= node.value ? node.left : node.right
    }

    return node
  }

  private pluckLeaf(parent: Node<T>, child: Node<T>): Node<T> {
    if (parent.left === child) {
      if (child.left) {
        // Continue left
        return this.pluckLeaf(child, child.left)
      }

      parent.left = child.right
    } else {
      if (child.right) {
        // Continue right
        return this.pluckLeaf(child, child.right)
      }

      parent.right = child.left
    }

    return child
  }
}

type Node<T> = {
  value: T
  left?: Node<T>
  right?: Node<T>
}
