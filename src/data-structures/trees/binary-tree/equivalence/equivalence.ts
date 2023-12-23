import type {BinaryTreeNode} from '../types'

export function areEquivalentAtDepth<T>(
  treeA: BinaryTreeNode<T> | null,
  treeB: BinaryTreeNode<T> | null,
): boolean {
  if (treeA == null || treeB == null) {
    return treeA === treeB
  }

  return (
    treeA.value === treeB.value &&
    areEquivalentAtDepth(treeA.left, treeB.left) &&
    areEquivalentAtDepth(treeA.right, treeB.right)
  )
}

export function areEquivalent<T>(treeA: BinaryTreeNode<T>, treeB: BinaryTreeNode<T>): boolean {
  return areEquivalentAtDepth(treeA, treeB)
}
