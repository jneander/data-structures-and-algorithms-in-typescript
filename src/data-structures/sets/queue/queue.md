# Queue

A queue is a linear data structure where elements are added to the end of the structure and removed
from the front. A queue also typically stores its current length to indicate how many elements it
contains.

The end-addition and front-removal behaviors make this structure act much like a real-world queue
(or line). The first person into the queue is the first person to leave the front of the queue. This
first-in, first-out characteristic is usually abbreviated as FIFO.

A queue starts with a fixed reference to its first element, called "head." Each element has a
reference, called "next," to the next element in the list. The head links directly to the second
element, which links to the third element, and so on.

Additionally, the queue maintains a reference to its last element, called "tail." This is important
for efficiency when adding elements to the queue.

```
[1 (head)] -> [2] -> [3] -> [4] -> [5 (tail)]
```

## Enqueuing

Adding elements to a queue is typically called "enqueuing." Elements are added at the end of the
queue, to maintain the FIFO ordering described above. The tail of the queue accomodates enqueuing so
that elements can be directly assigned to this position without needing to traverse any of the
elements already in the queue. Without it, enqueuing would need to start with the head, then walk
element after element until the last is reached. This would result in a time complexity of linear,
O(n). Since the tail allows direct assignment, time complexity is considered constant, O(1).

## Dequeuing

Removing elements from the queue is typically called "dequeuing." Elements are removed from the
front of the queue, in keeping with the FIFO ordering described above. The head of the queue is
updated with the next element in the queue, and the value of the previous head is returned. As with
enqueuing, this is a direct update with a time complexity of constant, O(1).
