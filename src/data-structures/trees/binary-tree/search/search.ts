import {Queue} from '../../../sets/queue/queue'
import type {BinaryTreeNode} from '../types'

export function containsAtDepth<T>(node: BinaryTreeNode<T> | null, value: T): boolean {
  if (node == null) {
    return false
  }

  return (
    node.value === value || containsAtDepth(node.left, value) || containsAtDepth(node.right, value)
  )
}

export function containsDepth<T>(node: BinaryTreeNode<T>, value: T): boolean {
  return containsAtDepth(node, value)
}

export function containsBreadth<T>(node: BinaryTreeNode<T>, value: T): boolean {
  const queue = new Queue<BinaryTreeNode<T>>()
  queue.enqueue(node)

  while (queue.length > 0) {
    const current = queue.dequeue()

    if (current.value === value) {
      return true
    }

    if (current.left) {
      queue.enqueue(current.left)
    }

    if (current.right) {
      queue.enqueue(current.right)
    }
  }

  return false
}
