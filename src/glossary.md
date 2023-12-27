# Glossary

## Acyclic

A graph is considered acyclic when none of its nodes are connected such that walking their
connections starting at one of the connected nodes will eventually return to that same node.

## Array

An array is a data structure which stores elements of the same type in contiguous memory. Typically,
an array has a fixed size.

An array's elements are accessed according to an integer index, both for reading and writing. In
TypeScript, this access appears as follows:

```ts
const value = array[index] // read value
array[index] = value // write value
```

Access to a a known index of a given array is performed in constant time, O(1).

## Balanced

A tree is _perfectly_ balanced when the children of the root or any node have the same height.

## Binary Search Tree

A type of binary tree which maintains a specific order to all nodes, such that for any given node
(including the root), all nodes at any level on one side precede the given node in order, while all
nodes at any level on the other succeed the given node in order.

## Binary Tree

A tree in which each node can only have 0, 1, or 2 children.

## Branching Factor

The number of children within a tree.

## Breadth-first Traversal

In tree data structures, a breadth-first traversal visits the direct children of a node before
visiting any indirect children (or children of the given node's children).

## Connected

A connected graph is one in which in which every node can reach every other node, with consideration
for direction.

## Cycle

In a graph, a cycle is when three or more nodes are connected such that walking their connections
starting at one of the connected nodes will eventually return to that same node.

## Depth-first Traversal

In tree data structures, a depth-first traversal visits each node in a single branch, in sequence,
before visiting any nodes on any other branches.

## Directed

A directed graph is one in which there is an explicit, directional relationship between any two
nodes.

## Edge

In a graph, an edge is a connection between any two nodes.

## General Tree

A tree with 0 or more children.

## Graph

A graph is a data structure which is composed of nodes (units of information) and relationships
between those nodes.

## Height

Height for a tree is defined as the longest path from the root to the most child node, a child which
itself has no children.

## Inorder Tree Traversal

Inorder traversal of a tree is recursive, visiting the preceding children of a node, followed by the
node, then the succeeding children of the node. This is a depth-first traversal.

## Leaf

A tree node which has no children.

## List

A list is an abstract data structure which stores elements in linear order, but not necessarily in
contiguous memory. Typically, each element in a list would have the same data type. But this may or
may not be enforced by either the programming language's type system or the specific implementation
of the list.

## Node

A node is a unit of information contained within a data structure. In a linear data structure, such
as a linked list, each node has a position relative to other nodes which determines how the
information is accessed.

In a graph, a node is explicitly connected to zero or more other nodes. These connections determine
how the information is accessed.

## Postorder Tree Traversal

Postorder traversal of a tree is recursive, visiting the preceding children of a node, followed by
the succeeding children of the node, then the node. This is a depth-first traversal.

## Preorder Tree Traversal

Preorder traversal of a tree is recursive, visiting each node, followed by the preceding children of
the node, then the succeeding children of the node. This is a depth-first traversal.

## Root

The most parent node in a tree.

## Search

Searching is the process of traversing a data structure for either a specific element or an element
matching a specific condition. Searching typically determines either the existence of a known
element, a referenceable position of a known element such as its index, or the element itself when a
condition is used to identify it.

# Time Complexity (or Running Time)

The runtime of an algorithm is expressed as a math formula. Since the real-world runtime is affected
by any number of circumstantial factors, the runtime is expressed without units. This more simply
describes how much computation time is required to run an algorithm. This also makes it simpler to
compare the runtimes of different algorithms for efficiency. This concept is referred to as **Time
Complexity** and is represented in Big-O notation—e.g. O(n) or O(1).

Below is a list of common complexity values in increasing order:

1. O(1)
2. O(log n)
3. O(n)
4. O(n log n)
5. O(n²)
6. O(n² log n)
7. O(n³)
8. O(2ⁿ)
9. O(n!)

## Traversal

Traversal is the process of iteratively accessing connected (or adjacent) elements in a data
structure that is composed of elements that are implicitly or explicitly related to each other. In
the case of arrays, two elements having indices that are one integer apart are considered adjacent,
and thereby related. Traversal through an array would start at a given index—e.g. 5—then step to
either the next or previous index—e.g. 6 or 4, respectively.

## Undirected

An undirected graph is one in which there is no directional relationship between any two nodes.

## Vertex

In a graph, a vertex is the common name for a node.

## Weighted

A weighted graph is one in which the edges of the graph have an explicit value which influences how
a graph is walked, typically in terms of efficiency.
