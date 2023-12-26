# Binary Search Tree

A binary search tree is a type of binary tree which maintains a specific order to all nodes, such
that for any given node (including the root), all nodes at any level on one side precede the given
node in order, while all nodes at any level on the other succeed the given node in order.

To illustrate, consider the following binary tree:

```
     5
  ┌──┴──┐
  3     7
┌─┴─┐ ┌─┴─┐
2   4 6   8
```

The root element has a value of `5`. It has a left child `3` which, in keeping with the rules
described above, is _less than_ its parent. The root also has a right child `7` which is _greater
than_ its parent, also adhering to the ordering rules.

There is an additional level of children on both sides of the root. The `3` node has a left child of
`2` and a right child of `4`. The `7` element has a left child of `6` and a right child of `8`. When
considering only the relationship between the two middle children and their four grandchildren, both
have a structure consistent with the ordering rules. The left child is less than the parent, and the
right child is greater than the parent.

The full ordering rules specify that _all_ nodes at _any_ level on one side (the left) precede the
parent, while _all_ nodes on the other side (the right) succeed the parent. With the example above,
both of the `3` node's children are less than its parent's value of `5`. Additionally, both of the
`7` node's children are greater than its parent's value. This is an essential guarantee of a binary
search tree. This is what allows a search through the tree to traverse most efficiently.

To accommodate duplicate values, unless otherwise disallowed, direct or indirect children of a
parent must be allowed to share a value with that parent. An important detail to note is that the
choice of left or right side for duplicate values _must_ be consistent throughout the tree. More
simply, if the root allows other nodes to share its value only on the left side, every other node in
the tree must allow their values to be shared, but _also_ only on the left side.

## Finding an Element in the Tree

Finding an element performs comparison of a given value on a series of nodes (starting with the
root) until either a node with the value is found or the last node is reached without a match. The
steps are as follows:

1. If the node value matches the given value, return `true`.
2. If the given value is less than the node:

   a. If the node has a left child, move to that child and repeat from step 1.

   b. Otherwise, return `false`.

3. If the given value is greater than the node:

   a. If the node has a right child, move to that child and repeat from step 1.

   b. Otherwise, return `false`.

Note that as the loop moves from one node to the next, entire branches are removed from the search
range. In a balanced tree, this reduction is half of the remaining tree at each step. The reduction
here is logarithmic. However, it is based not on the size of the tree, but rather how many levels of
children can potentially be visited in the traversal. This value is called the "height" of the tree.

Since the number of iterations is at most equal to the height of the tree, it is not quite linear.
At best, it is logarithmic, O(log n). However, in an unbalanced tree, where all nodes are connected
only on one side of branching, the tree effectively becomes a linked list. In this case, the worse
case performance is linear, O(n). For a binary search tree, this time complexity is generally
written as O(h).

## Adding Elements

Adding an element starts at the root. With an empty tree, the first added element becomes the root.
To insert additional elements, their appropriate position within the tree structure must be found by
traversing nodes and comparing values. That process has the following steps:

1. If the value is less than or equal to the node:

   a. If the node has a left child, move to that child and repeat from step 1. b. Otherwise, set the
   value on a new node as the left child of the current node.

2. Otherwise (the value is greater than the node):

   a. If the node has a right child, move to that child and repeat from step 1. b. Otherwise, set
   the value on a new node as the right child of the current node.

Without any additional steps to optimize the structure after addition, the most that the above steps
must be performed is equal to the height of the tree. Just as with finding an element as described
above, the time complexity of adding an element is O(h).

## Removing an Element

Removing an element starts with the same steps required to find an element. Its position in the tree
must be located before any other steps. When removing an element, no other elements are affected.
When considering a node in the tree, this means any branches of nodes (left or right) of a node
being removed must be retained in the tree after the node has been removed. Therefore, once the node
with the given value is found, the steps for its removal will depend on whether it has zero, one, or
two children.

### With Zero Children

When the node to be removed has no children, then there are no other nodes that would be impacted by
its removal. Simply removing its parent's reference to it will accomplish the task. When the element
to be removed is the only one in the tree, its node is the head. Removing the head reference
achieves the same result.

### With One Child

When the node to be removed has one child, either left or right, that child must be retained in the
tree. Consider that removing a node is actually just removing the reference or relationship with its
parent. In the case of this node being removed having one child, that is one relationship which now
must be replaced with another in order for the child to remain in the tree. The solution is to have
the node's parent replace the reference to the node with a reference to the node's child.

To illustrate, consider the following tree:

```
       5
    ┌──┴──┐
    4     7
  ┌─┘   ┌─┴─┐
  2     6   8
┌─┴─┐
1   3
```

For the case of removing a node with one child, the node with a value of `4` will be removed. Using
the solution described above, the parent node (with value `5`) replaces its left child reference (to
the node being removed) with a reference to the node with a value of `2` (which is the only child of
the node being removed). The result is illustrated in the following tree:

```
     5
  ┌──┴──┐
  2     7
┌─┴─┐ ┌─┴─┐
1   3 6   8
```

Notice how no other nodes have been affected by the change in relationships. Additionally, the
ordering rules of less-than-or-equal on left vs greater-than on right continues to apply.

To illustrate the same removal for a node with only a right child instead of left, consider the
following tree:

```
      5
┌─────┴─────┐
1           7
└──┐      ┌─┴─┐
   3      6   8
 ┌─┴─┐
 2   4
```

The node with a value of `1` has only a right child. By applying the same steps above to remove it,
the result is the following tree:

```
     5
  ┌──┴──┐
  3     7
┌─┴─┐ ┌─┴─┐
2   4 6   8
```

Again, no other nodes have been affected by the change in relationships, and the ordering rules
continues to apply.

### With Two Children

Removing a node with both a left and right child requires some additional work to retain both
children as well as all other nodes in the tree while also preserving the ordering.

The simplest situation to remedy is one where neither of those children have their own children.
This is illustrated in the following tree:

```
     5
  ┌──┴──┐
  3     7
┌─┴─┐ ┌─┴─┐
2   4 6   8
```

The node with a value of `3` will be removed. It has a parent with a value of `5` and both left and
right children with values of `2` and `4`, respectively. One important detail to note that will
apply to this and any more complex situation extending from this is the guarantee which ordering
rules provide. No matter which nodes are involved in restructuring the left branch of the `5` node
after the removal, they will _all_ have a value no greater than `5`.

In the case above, either the `2` node or `4` node would work as the replacement for the `3` node,
as long as the left or right branching to the other was preserved. This is illustrated below, first
using the `2` node, then again using the `4` node.

```
   5
┌──┴──┐
2     7
└─┐ ┌─┴─┐
  4 6   8
```

```
     5
  ┌──┴──┐
  4     7
┌─┘   ┌─┴─┐
2     6   8
```

This is easy enough at a glance. However, to determine that this solution can be applied regardless
of which child node is used, both left and right branches of both children of the node being removed
would need to be confirmed as unassigned. If that is not the case, then a replacement needs to be
more deliberately chosen.

Consider the following variations:

**Variation 1**: One child has both branches, while the other has only one branch. That branch is on
the same side of the child's branch from its parent.

```
           8
     ┌─────┴─────┐
     4           9
  ┌──┴──┐
  2     6
┌─┘   ┌─┴─┐
1     5   7
```

In this case, the child node with only one branch will work as the replacement. No other changes are
necessary. The result is below.

```
         8
   ┌─────┴─────┐
   2           9
┌──┴──┐
1     6
    ┌─┴─┐
    5   7
```

**Variation 2**: One child has both branches, while the other has only one branch. That branch is on
the opposite side of the child's branch from its parent and is only one level deeper.

```
         8
   ┌─────┴─────┐
   4           9
┌──┴──┐
2     6
└─┐ ┌─┴─┐
  3 5   7
```

At a glance, this looks very close to the previous variation. However, moving the relevant child's
child (grandchild) from one branch to the other poses a challenge. Since the grandchild is branching
on the opposite as the child itself (the child is left of its parent and the grandchild is right of
the child, or vice versa), then there are two conflicts to resolve:

1. Both the grandchild and the other child of the node being removed are branching in the same
   direction and cannot coexist as direct children of the replacement node.
2. The grandchild cannot be moved to the opposite branch of the child, since that would break the
   ordering rules.

The solution involves a restructuring that might not be obvious, or intuitive. In the tree above,
the node with value `3` is the conflicting node. Note the following:

1. Its value is greater than its parent (with value `2`).
2. Its value is less than (or equal to, by rule) the value of the node being removed (value `4`).
3. The value of the node being removed is less (or equal to, by rule) than its right child (and any
   of that child's children).

The subtle quality of these rules being focused on here is that the node with value `3` follows all
of the same rules as the node with value `4`. In fact, their rules almost mirror each other.

Consider this portion of the tree:

```
   A
┌──┴──┐
B     D
└─┐ ┌─┘
  C E
```

To discuss ordering rules without considering literal values, the nodes are identified here with the
letters (A) through (E). Earlier, the ordering rules were described for children with regard to
their parents. That's only one side of the relationship. The same rules can be described for the
parent with regard for its children.

Here, the rules for (A) with respect to its children are as follows:

1. (A) must be _greater than or equal to_ any node at any level on its left branch (B or C).
2. (A) must be _less than_ any node at any level on its right branch (D or E).

Posed similarly, the rules for children with respect to their parents are again as follows:

1. A left child (B or E) must be _less than or equal to_ its parent.
2. A right child (C or D) must be _greater than_ its parent.

Now, when considering the relationship between (A) and (C), the following must be true:

1. (A) must be _greater than or equal to_ (C).
2. (C) must be _less than or equal to_ (A).

Therefore, when taking the whole of this simple tree into account, the complete ruleset for (C) can
be observed:

1. Since (A) must be less than (D or E), and (C) must be be less than or equal to (A), (C) must be
   _less than_ but **not equal to** (D or E).
2. (C) must be _greater than_ (B).

This puts the value of (C) absolutely between either branch of (A), meaning it can be used as a
replacement for (A).

The result is that, since the node with value `3` has no children, there is nothing preventing it
from replacing the node being removed. The result is as follows:

```
         8
   ┌─────┴─────┐
   3           9
┌──┴──┐
2     6
    ┌─┴─┐
    5   7
```

The ability to move a tree node from a lower level to a higher level while adhering to ordering
rules is powerful. It enables node removals at any position within the tree without resulting in an
irreconcilable structure.

**Variation 3**: Both children have two branches with only one level deeper.

```
           8
     ┌─────┴─────┐
     4           9
  ┌──┴──┐
  2     6
┌─┴─┐ ┌─┴─┐
1   3 5   7
```

This variation is essentially a duplicate of the previous, just with the grandchild nodes filled in.
Before moving on to more complex trees, it's worth examining a tree without gaps. For the sake of
example, the right branch remains unbalanced.

Generally, fewer steps taken to remove an element increases efficiency. Removing a leaf node takes
only one step. Removing any other node requires another node to replace it.

Consider the relationships in this tree. If any given non-leaf node were removed, which node could
take its place? What adjustments would be required afterward?

The simplest cases—replacing a given node without further adjustment—are as follows:

- The node with value `8` can be replaced with either `9` or `7`.
- The node with value `4` can be replaced with either `3` or `5`.
- The node with value `2` can be replaced with either `1` or `3`.
- The node with value `6` can be replaced with either `5` or `7`.

There's a pattern here. Each node's potential replacements are one of the following:

- the right-most, highest-value element on the given node's left branch
- the left-most, lowest-value element on the given node's right branch

The next and last variation will explore this pattern.

**Variation 4**: Both children have two branches with multiple levels deeper.

The following tree has multiple levels of nodes with child nodes. Again for the sake of example, the
right branch remains unbalanced.

```
                    10
           ┌─────────┴────────┐
           4                 11
     ┌─────┴─────┐
     2           7
  ┌──┴──┐     ┌──┴──┐
  1     3     6     9
┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┘
1   2 3   4 5   7 8
```

Consider the case where the root node (with value `10`) is being removed. It has two children, with
values `4` and `11`. The pattern identified in the previous variation can be applied to find a
replacement.

The pattern states that the potential replacements include both of the following:

- the right-most, highest-value element on the given node's left branch
- the left-most, lowest-value element on the given node's right branch

These nodes can be found by following the same steps:

1. From the node being removed, move to the left (or right) child node.
2. If this node has a right (or left, respectively) child, move to that child and repeat step 2.

In this example, the left branch will be used.

Following these steps, the first node to visit is the left child of the root (with value `4`).
That's step 1. With step 2, this node's right child (with value `7`) is visited. Since this node is
greater in value by rule, it is closer in value to the root.

This node also has a right child (with value `9`), so step 2 is repeated and that child is visited
next. Like with its parent, it must also be greater in value, making it closer in value to the root.

At this point, there are no more children to the right of this node. This means no other node can
have a greater value on this side of the root.

While it does have a left child, the highest value that child could have would be equal to the
current node. Therefore this node is _greater than or equal to_ all others left of the root. Since
by rule it must be less than or equal to any rightward ancestor (the root, in this case), it is also
less than any node on the right branch of the that ancestor. With all rules being met, this node can
replace the removed root.

The final step in this removal is to ensure that the replacement node's left child (along with any
descendants) is appropriately retained. As has been illustrated earlier, that only child can replace
its parent when the parent is removed (or in this case, when the parent is relocated to replace a
different node). That child (with value `8`) thus becomes the right child of the node with value
`7`. The node with value `9` replaces the root, adopting its left and right children. And the task
is complete.

The resulting tree is as follows:

```
                     9
           ┌─────────┴────────┐
           4                 11
     ┌─────┴─────┐
     2           7
  ┌──┴──┐     ┌──┴──┐
  1     3     6     8
┌─┴─┐ ┌─┴─┐ ┌─┴─┐
1   2 3   4 5   7
```

While all of these steps and considerations seem complex, the algorithm remains quite efficient. The
tree is traversed until the element with the given value is found. If that element has children, the
remaining height of the tree is the search range for a replacement. In total, the height of the tree
has been traversed only once, and all other actions have a constant time complexity, O(1). All
together, the time complexity of removing an element is linear to the height of the tree, O(h).
