# Glossary

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

## List

A list is an abstract data structure which stores elements in linear order, but not necessarily in
contiguous memory. Typically, each element in a list would have the same data type. But this may or
may not be enforced by either the programming language's type system or the specific implementation
of the list.

## Search

Searching is the process of traversing a data structure for either a specific element or an element
matching a specific condition. Searching typically determines either the existence of a known
element, a referenceable position of a known element such as its index, or the element itself when a
condition is used to identify it.

## Traversal

Traversal is the process of iteratively accessing connected (or adjacent) elements in a data
structure that is composed of elements that are implicitly or explicitly related to each other. In
the case of arrays, two elements having indices that are one integer apart are considered adjacent,
and thereby related. Traversal through an array would start at a given index—e.g. 5—then step to
either the next or previous index—e.g. 6 or 4, respectively.
