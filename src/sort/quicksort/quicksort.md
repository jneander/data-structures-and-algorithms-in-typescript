# Quicksort

Quicksort applies to linear data structures, such as arrays or lists, where the elements have values
which can be mathematically compared as less than, greater than, or equal to each other.

Quicksort uses a "divide and conquer" approach to sorting. Divide and conquer means taking an
initial task and repeatedly breaking it down (dividing it) into successively smaller or simpler
tasks until the whole of the larger task is accomplished.

Quicksort couples this with another approach to sorting called "weak sorting." Weak sorting is a
more broad and partial method which signifies one element in the data structure as the element to
compare all others against. This element is called the "pivot." To weakly sort all elements, any
element less than the pivot ends in a position before the pivot, while any element greater than the
pivot ends in a position after the pivot.

How are these moves determined? How does the pivot ultimately end up in the correct position?

Consider the following array:

```
[6, 3, 5, 1, 7, 2, 4]
```

Without any preliminary knowledge about existing order or overall value range among the elements
within, the selection of the pivot is generally arbitrary. For ease in implementation, the last
element is typically selected. In this case, `4` is selected as the pivot.

To determine where the pivot and all elements end up, each element is compared against the pivot,
starting from the beginning of the array. When an element is less than the pivot, it needs to move
towards the start of the array. The lesser element swapped with an element earlier in the array,
starting with the first position.

First, at index 0, `6` is not less than `4`, so no action is taken.

```
[6, 3, 5, 1, 7, 2, 4]
```

Next, at index 1, `3` _is_ less than 4, so it is swapped into the first position of the array.

```
[3, 6, 5, 1, 7, 2, 4]
```

Since the first position of the array is now known to have an element less than the pivot, that
element must remain there. To ensure it stays put, the position of the most recent swap is stored.
In this case, the next element will use the second position instead of the first.

Continuing, at index 2, `5` is not less than `4`, so no action is taken.

```
[3, 6, 5, 1, 7, 2, 4]
```

At index 3, `1` is less than `4`, so it is swapped into the next available swap position. As stated
above, this position is now at index 1, immediately after the `3` swapped earlier.

```
[3, 1, 5, 6, 7, 2, 4]
```

Moving through the rest of the array, `7` remains in place, and `2` is swapped.

```
[3, 1, 2, 6, 7, 5, 4]
```

At the point, all elements except for the pivot have been compared and moved as needed. Looking at
what would be the next swap position at index 3, notice that all elements before that position are
less than the pivot, while all elements from that position and on are greater than the pivot. The
last action in this step is to swap the pivot into this position.

```
[3, 1, 2, 4, 7, 5, 6]
```

The `4` swaps with the `6`, which moves to the end. The pivot now separates elements into two
contiguous ranges: the first with elements less than the pivot, and the second with elements greater
than the pivot. Notice that those two ranges are themselves still not sorted. They are now weakly
sorted to the entire array, but not yet sorted within those subsets of the array.

The next step is to divide the array into two and repeat the process.

The next iteration will run twice, once with each of the following ranges.

```
[3, 1, 2] // index 0 through 2 of the original array
[7, 5, 6] // index 4 through 6 of the original array
```

The weakly sorted array was divided at the pivot position. The pivot itself is now considered sorted
and will be excluded from additional steps. Even though no other elements are conclusively sorted at
this step, no further steps will change the number of elements before or after the pivot. Therefore,
its position will no longer change.

Note that these are not separate arrays, but rather subsets of the whole initial array. All element
swaps occur in-place, mutating the given array until the task is finished. For ease of illustration,
these subsets are depicted as their own arrays. In practice, index variables are used to determine
the start and end of each subset during the comparison/swap step.

Separately for these subsets, the pivots are `2` and `6`, respectively. There are two elements to
compare. After comparing and swapping as before, the array subsets now have the following elements:

```
[1, 3, 2]
[5, 7, 6]
```

And after moving the pivot as before:

```
[1, 2, 3]
[5, 6, 7]
```

These subsets now appear sorted, at least as depicted here. When considering their place in the
whole array, the result is this:

```
[1, 2, 3, 4, 5, 6, 7]
```

It would appear that the overall task has been accomplished. However, this is not the case. Recall
that the comparison/swap step is rearranging elements into contiguous ranges of less-than-pivot and
greater-than-pivot elements. After two iterations, there are still two arrays that need to be
divided. At the start of the third iteration, the previous arrays are divided at their pivot
positions. They appear as follows:

```
[1] // index 0 through 0 of the original array
[3] // index 2 through 2 of the original array
[5] // index 4 through 4 of the original array
[7] // index 6 through 6 of the original array
```

The most important part of this algorithm is what determines when the task is done. "Done" could be
defined as "the elements are all sorted." But what criteria can determine definitively that this is
the case? When considering the entire array, it wouldn't conclusively be sorted without iterating
through all elements and comparing along the way. Doing this once would be expensive. Doing so after
each iteration would increase that cost dramatically.

Fortunately, a natural quality of arrays (and all linear data structures) can be used in place of an
explicit verification step. While an array of more than one element must be verified for order, and
array with only one element is _always_ ordered! Once an iteration starts with an array with no more
than one element, there's nothing to compare and therefore nothing to rearrange.

Looking at the `[1]` and `[3]` array subsets above, they're definitely sorted. Returning to the
previous step, it ended with the following division:

```
[1] // all values less than the pivot
2   // the pivot
[3] // all values greater than the pivot
```

The same is true for the other portion of the array:

```
[5] // all values less than the pivot
6   // the pivot
[7] // all values greater than the pivot
```

And recall that these values were swapped into these positions in the original array, so they are
adjacent to each other.

```
[1, 2, 3] // index 0 through 2 of the original array
[5, 6, 7] // index 4 through 6 of the original array
```

Returning to the next previous step, the first iteration, that ended with the following division of
indices:

```
// index 0 through 2 (all values less than the pivot)
// index 3           (the pivot)
// index 4 through 6 (all values greater than the pivot)
```

Filling that in with the elements which now reside at those indices:

```
[1, 2, 3] // all values less than the pivot
4         // the pivot
[5, 6, 7] // all values greater than the pivot
```

At each step, the elements were weakly sorted into successively smaller subsets. This continued
until the arrays were naturally sorted (and not just weakly). The result is a completely sorted
array!

When evaluating the time complexity of quicksort, consider the worst case, the case which results in
the most work to be done. To illustrate, here's an array of the same elements as above, but sorted
in the opposite order as desired.

```
[7, 6, 5, 4, 3, 2, 1]
```

The arbitrary choice for pivot from above gives a pivot of `1`. Each element is compared against the
pivot, but since they are all greater than the pivot, no swaps are performed and the pivot does not
move. The array is divided at the pivot for the next iteration, which starts with the following
arrays:

```
[7, 6, 5, 4, 3, 2]
[]
```

The second array is empty, so it's considered sorted. However, the first array is only one position
shorter, and with the starting order maintained. The next pivot becomes `2`. Again, the elements are
compared, and no swaps are performed. The process continues, with the outer loop iterating once for
each position in the array. Within each iteration, the inner loop performs a comparison for each
position (minus the pivot).

Notice that this array has the same length and elements of the array in the earlier example, just
with a different order. While the earlier example took only 3 iterations, this example took 7.
That's a substantial increase for such a seemingly trivial difference.

The outer loop has a linear time complexity, O(n). But this is multiplied by the time complexity of
the inner loop, which decreases by one with each iteration of the outer loop. The mathematical
representation of these steps is `n²/2 + n/2`. Big-O notation ignores the constant factor of `1/2`
and lower-order terms, which means the time cmmplexity is considered exponential, O(n²).
