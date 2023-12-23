import {Queue} from '../../../sets/queue/queue'

export type BinaryTreeNode<T> = {
  value: T
  left?: BinaryTreeNode<T>
  right?: BinaryTreeNode<T>
}

function walkPreorder<T>(node: BinaryTreeNode<T> | null, path: T[]): T[] {
  if (!node) {
    return path
  }

  path.push(node.value)
  walkPreorder(node.left, path)
  walkPreorder(node.right, path)

  return path
}

export function traversePreorder<T>(node: BinaryTreeNode<T>): T[] {
  return walkPreorder(node, [])
}

function walkInorder<T>(node: BinaryTreeNode<T> | null, path: T[]): T[] {
  if (!node) {
    return path
  }

  walkInorder(node.left, path)
  path.push(node.value)
  walkInorder(node.right, path)

  return path
}

export function traverseInorder<T>(node: BinaryTreeNode<T>): T[] {
  return walkInorder(node, [])
}

function walkPostorder<T>(node: BinaryTreeNode<T> | null, path: T[]): T[] {
  if (!node) {
    return path
  }

  walkPostorder(node.left, path)
  walkPostorder(node.right, path)
  path.push(node.value)

  return path
}

export function traversePostorder<T>(node: BinaryTreeNode<T>): T[] {
  return walkPostorder(node, [])
}

export function traverseBreadth<T>(node: BinaryTreeNode<T>): T[] {
  const path: T[] = []

  const queue = new Queue<BinaryTreeNode<T>>()
  queue.enqueue(node)

  while (queue.length > 0) {
    const current = queue.dequeue()
    path.push(current.value)

    if (current.left) {
      queue.enqueue(current.left)
    }

    if (current.right) {
      queue.enqueue(current.right)
    }
  }

  return path
}
