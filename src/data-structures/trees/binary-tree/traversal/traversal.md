# Binary Tree Traversal

Traversing a binary tree will visit each node in the tree, or each node until some condition is met.
It can visit nodes in three depth-first orders:

1. Preorder
2. Inorder
3. Postorder

It can also visit nodes in breadth-first order.

To illustrate, consider the following binary tree:

```
     A
  ┌──┴──┐
  B     C
┌─┴─┐ ┌─┴─┐
D   E F   G
```

## Preorder Traversal

Preorder traversal of a binary tree consists of the following steps, repeated recursively:

1. Visit the current node.
2. Move to the node's left child, and repeat from step 1.
3. Move to the node's right child, and repeat from step 1.

"Preorder" means that the current node is visited before its children.

For the above tree, a preorder traversal visits nodes in the following order:

1. A
2. B
3. D
4. E
5. C
6. F
7. G

## Inorder Traversal

Inorder traversal of a binary tree consists of the following steps, repeated recursively:

1. Move to the node's left child, and repeat from step 1.
2. Visit the current node.
3. Move to the node's right child, and repeat from step 1.

"Inorder" means that the current node is visited after its preceding (or left) child, but before its
succeeding (or right) child.

For the above tree, an inorder traversal visits nodes in the following order:

1. D
2. B
3. E
4. A
5. F
6. C
7. G

## Postorder Traversal

Postorder traversal of a binary tree consists of the following steps, repeated recursively:

1. Move to the node's left child, and repeat from step 1.
2. Move to the node's right child, and repeat from step 1.
3. Visit the current node.

"Postorder" means that the current node is visited after its children.

For the above tree, a postorder traversal visits nodes in the following order:

1. D
2. E
3. B
4. F
5. G
6. C
7. A

## Breadth-first Traversal

Breadth-first traversal starts with a queue containing the root. It then iteratively repeats the
followings steps for each node in the queue until the queue is empty:

1. Visit the node.
2. Add the node's children to the queue.
3. Remove the node from the queue.

For the above tree, a breadth-first traversal visits nodes in the following order:

1. A
2. B
3. C
4. D
5. E
6. F
7. G

## Time Complexity

Each type of traversal requires visiting each node only once. Therefore, the time complexity scales
linearly with the input, O(n).
