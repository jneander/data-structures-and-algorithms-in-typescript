# Linear Search

A linear search applies to linear data structures, such as arrays or lists.

In the case of an array, a linear search will determine either the existence or the index of a given
value. The algorithm starts at the first (or a specified) position of the array, then linearly steps
through each position until either the given value is found or the end of the array is reached.

The best case scenario has the given value in the first position of the array, resulting in a single
step.

The worst case scenario is one in which the value is not present in the array at all, resulting in a
step for each position in the array.

Since the potential number of steps through the data structure increases uniformly with the length
of the structure, the time complexity is considered linear, O(n).
