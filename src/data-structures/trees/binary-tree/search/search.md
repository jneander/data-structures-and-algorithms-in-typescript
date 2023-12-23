# Binary Tree Search

Searcing a binary tree will visit each node in the tree until either a node with the given value is
found or all nodes have been visited. It can visit nodes in either depth-first or breadth-first
orders.

To illustrate, consider the following binary tree:

```
     A
  ┌──┴──┐
  B     C
┌─┴─┐ ┌─┴─┐
D   E F   G
```

## Depth-first Search

Preorder traversal of a binary tree consists of the following steps:

1. Compare the current node. Return true if it matches the given value.
2. Move to the node's left child, and repeat from step 1.
3. Move to the node's right child, and repeat from step 1.

For the above tree, a depth-first search visits nodes in the following order:

1. A
2. B
3. D
4. E
5. C
6. F
7. G

## Breadth-first Search

Breadth-first search starts with a queue containing the root. It then iteratively performs the
followings steps for each node in the queue until a node with the given value is found or the queue
is empty:

1. Compare the current node. Return true if it matches the given value.
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

Each type of traversal requires visiting each node at most once. Therefore, the time complexity
scales linearly with the input, O(n).
