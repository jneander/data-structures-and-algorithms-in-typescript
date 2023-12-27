# Heap

A heap is a type of tree. Elements are added to the tree in any order, but are removed in either
ascending or descending order based on the type of heap. The lowest or highest value as the root
element can be considered strictly ordered. However, all other elements are weakly ordered, in
generally ascending or descending order relative to their parents but not to any other elements. As
elements are removed, the tree is restructured so that the next element in order is moved to the
root while all others remain weakly ordered.

A heap is also a balanced tree, meaning that, as much as possible, each branch is equally long. No
branch can have more than one node greater or fewer than any other. And the branches increase their
length from left to right. To illustrate, consider the numbered tree below:

```
     1
  ┌──┴──┐
  2     3
┌─┴─┐ ┌─┴─┐
4   5 6   7
```

Each node has a number. For each element being inserted into this tree, each number represents to
the position at which that element would be inserted. So, the first element `1` is assigned to the
root. Next, element `2` is the left child of the root, followed by `3` as the right child of the
root. With this level full, element `4` starts the next level as the left-most child (the left child
of element `2`). And so on.

This number also indicates the length of the tree up to each position in the tree, if that position
were the last in the tree.

A balanced tree means that, as the tree is walked downward from the root through its children, each
step removes half of the remaining tree from the potential remaining steps. For a full-height walk,
the time complexity is thus considered logarithmic, O(log n).

## Types of Heaps

A **Min Heap** removes elements in ascending order, always positioning the lowest-value element at
the root.

A **Max Heap** removes elements in descending order, always positioning the highest-value element at
the root.

## Adding an Element

When adding an element to the heap, it is placed in the next available node at the bottom of the
tree. Since a new lowest or highest value could end up in that position, another step is required to
ensure that the root has the correct value and that all other nodes remain weakly ordered.

After this assignment, starting at the node just assigned, its value is compared to that of its
parent. If the value is less than its parent's (for a Min Heap) or greater than its parent's (for a
Max Heap), the parent and this node have their values swapped. This repeats with the parent node. If
its value is out of order with its parent's value, they are swapped. This repeats up the tree until
either both nodes compared are correctly ordered, or the root is reached.

When the root is reached, this means all of the nodes visited beneath it during this step are
correctly ordered, leaving the root with the lowest or highest value. Since this process occurs with
each addition to the tree, the root will only ever be replaced with a value that is even
lower/higher than before, ensuring that it remains the lowest/highest in the entire tree.

At most, this process traverses the height of the tree. And since the tree is balanced, this means
it has a time complexity of logarithmic, O(log n).

## Removing an Element

When removing an element, the root (being the lowest or highest value) is removed and its value is
returned. Before returning, the root must be replaced and the tree's order ensured. This starts by
moving the last node in the tree to the root position. Since this node's value could now be out of
order with the rest of the tree, another step is required to maintain overall order.

Starting at the new root, its value is compared to those of its children. For whichever child has
the lowest value (for a Min Heap) or the highest value (for a Max Heap) between the two, if this
value is lower/higher than the root's, these two nodes are swapped. This repeats with the swapped
child node. If its value is out of order with the child of lowest/highest value, they are swapped.
This repeats down the tree until either both nodes compared are correctly ordered, or a node with no
children is reached.

When a node with no children is reached, this means all of the nodes visited before it during this
step are correctly ordered, all the way up to the root. This ensures that subsequent removals keep
each distinct lineage (from root to leaf) in order and continually position the next lowest/highest
elements as the immediate children of the root.

At most, this process traverses the height of the tree. And since the tree is balanced, this means
it has a time complexity of logarithmic, O(log n).
