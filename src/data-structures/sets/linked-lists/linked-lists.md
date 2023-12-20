# Linked Lists

A linked list is a linear data structure where the elements in the list are accessed by a reference
from their adjacent elements, starting with a fixed reference to an initial element. The list also
typically stores its current length to indicate how many elements it contains.

## Singly Linked List

A singly linked list provides only unidirectional traversal through the structure. It starts with a
fixed reference to the first element in the list, called "head." Each element has a reference,
called "next," to the next element in the list. The head links directly to the second element, which
links to the third element, and so on.

```
[1 (head)] -> [2] -> [3] -> [4] -> [5]
```

## Doubly Linked List

A doubly linked list uses a "head" reference as in a singly linked list. However, it also includes a
reference to the last element in the list, called "tail." Each element, in addition to the "next"
reference, includes a reference called "previous" which points to the previous element in the list.

As an example, consider a list of 5 elements. The head is the 1st element, and the tail is the 5th
element. The head's "next" is the 2nd element. Since the head is the 1st element, it has no
"previous." The 2nd element's "previous" is a reference to the head. The 2nd element also has a
"next" for the 3rd element, and so on. The tail is the last element, so it has no "next." It's
"previous" is a reference to the 4th element.

```
[1 (head)] <-> [2] <-> [3] <-> [4] <-> [5 (tail)]
```

The addition of both the tail and the previous references provides reverse traversal through the
list, starting with the tail. This makes a doubly linked list bidirectional.

## Finding an Element in the List

Without more than a reference to the first (or last) elements in the list, finding elements in the
list either through positional index or through matching criteria must start with the head or tail,
then walk from element to element through their next or previous references until the intended
element is found (or the opposite end of the list is reached).

This means that, unlike an array with directly-indexed elements, lookups in a linked list take
considerably more time. Since a lookup can potentially visit each element in the list once, the time
complexity is equal to (and scales with) the number of elements in the list, and is considered
linear, O(n).

## Adding or Removing Elements

Linear data structures typically provide two ways to add or remove elements. Elements can be
directly added to or removed from the start or end of the structure. They can also be inserted at or
removed at a specific position within the structure.

An addition to the start of a linked list is often called "prepending." Since both singly and doubly
linked lists have a reference to the first element in the list, adding an element to either list
requires only updating the head reference (including adding a reference to the new head as
"previous" on the existing head, now 2nd element). This update occurs in constant time, O(1).

A removal from the start of a linked list is no different. Only the head is being updated, again in
constant time, O(1).

When considering additions or removals from the end of a linked list, the time complexity increases
for singly linked lists, but not for doubly linked lists. A doubly linked list maintains a reference
to its last element, so the same updates on the head (for an addition or removal at the start) apply
to the tail (for an addition or removal at the end). This keeps additions at constant time, O(1).

However, since a singly linked list has only the reference to head, the only way to obtain a
reference to the last element for either an addition or deletion is to traverse the list in its
entirety, which means the time complexity is linear, O(n).

For insertions and deletions anywhere between the head or tail, both singly and doubly linked lists
require some amount of traversal, potentially up to the length of the entire list, depending on
where the relevant position resides. When given an index, doubly linked lists can potentially
optimize the traversal to the intended position by comparing its proximity to either the 0 index or
list length. Choosing the shorter of the paths from the head or the tail, respectively, would limit
the worst case to half the list length. However, in either case, a unknown amount of traversal is
unavoidable. Therefore, the time complexity for such insertions or deletions is linear, O(n).
