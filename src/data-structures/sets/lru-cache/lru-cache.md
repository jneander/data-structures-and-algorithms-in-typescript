# LRU Cache

LRU stands for least-recently-used. This is a map-like data structure which contains values
associated with given keys. Additionally, it remembers the order in which elements in the structure
have been either read or updated. An LRU Cache also has a capacity. When it contains a number of
elements equal to its capacity, and an element with a new key is added to the structure, the element
that was either read or updated least-recently is entirely removed from the cache.

For example, consider a cache with a capacity of 3. In order, the following operations occur:

First, the key of "A" is set to a value of 1. The cache now contains only the value of 1 stored at
the key of "A".

Next, the key of "B" is set to a value of 2. The cache now holds "A" set to 1 and "B" set to 2. In
terms of recently-used, the key of "B" is more recently-used than "A."

Next, the key of "C" is set to a value of 3. The cache now holds all three of the values stored to
this point, and is also at capacity. In terms of recently-used, the key of "C" is more recently-used
than "B," which is still more recently-used than "A."

Now, the key of "D" is set to a value of 4. Being at capacity, the cache needs to remove an element
to make space available for this assignment. The least-recently-used element is the that with a key
of "A," so its key and value are removed from the data structure. The key of "D" can now be set with
the value of 4.

The above sequence is a simple case, where no element was either read or updated after the initial
assignment. As another example, consider the same cache with the following operations:

First, the key of "A" is set to a value of 1. The cache now contains only the value of 1 stored at
the key of "A".

Next, the key of "B" is set to a value of 2. The cache now holds "A" set to 1 and "B" set to 2. In
terms of recently-used, the key of "B" is more recently-used than "A."

Next, the key of "A" is updated with a value of 10. The cache now holds "A" set to 10 and "B" set
to 2. In terms of recently-used, the key of "A" is now more recently-used than "B."

Next, the key of "C" is set to a value of 3. The cache now holds "A" set to 10, "B" set to 2, and
"C" set to 3. In terms of recently-used, the key of "C" is more recently-used than "A," which is
more recently-used than "B."

Next, the value at the key of "B" is retrieved from the cache. The cache contents have not changed.
But in terms of recently-used, the key of "B" is now the most recently-used, followed by "C," and
finally by "A."

## Time Complexity

Internally, an LRU Cache is using two data structures: a doubly-linked list and a hashmap.

The doubly-linked list is responsible for maintaining the recently-used order of elements. By using
a doubly-linked list, adding, relocating, and removing elements has a time complexity of constant,
O(1).

By itself, the doubly-linked list would still require walking the list to find a given key, which
would have a time complexity of linear, O(n). The hashmap is an optimization which associates each
key with the linked list node which holds its associated value. This means that each time a key's
value is either read or updated, the node for that value is found without having to walk the linked
list. This access also has a time complexity of constant, O(1).

Together, all reads and writes to the cache have a time complexity of constant, O(1).
