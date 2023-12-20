# Stack

A stack is a linear data structure where elements are added to and removed from the same end (the
"top") of the structure. A stack also typically stores its current length to indicate how many
elements it contains.

The top-addition and top-removal behaviors make this structure act much like a real-world stack of
items. Anything added to a stack must be placed on top of all existing items in the stack, and only
the topmost item can be removed at any given time. The first item placed on the stack is the last
item to be removed from the stack. This first-in, last-out characteristic is usually abbreviated as
FILO.

A stack starts with a fixed reference to its topmost element, called "head." Each element has a
reference, called "next," to the next element below in the the stck. The head links directly to the
second topmost element, which links to the third element, an so on.

```
[1 (head)]
 v
[2]
 v
[3]
 v
[4]
```

## Pushing

Adding elements to a stack is typically called "pushing." Elements are added to the top of the
stack, to maintain the FILO ordering described above. This head of the stack is updated with the
incoming value and a reference to the previous head, if present. This is a direct update with a time
complexity of constant, O(1).

## Popping

Removing elements from a stack is typically called "popping." Elements are removed from the top of
the stack, in keeping with the FILO ordering described above. The head of the stack is updated with
the next element in the stack, and the value of the previous head is returned. As with pushing, this
is a direct update with a time complexity of constant, O(1).
