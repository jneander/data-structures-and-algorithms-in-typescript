# Binary Search

A binary search applies to arrays whose elements match the following criteria:

- have values which can be mathematically compared as less than, greater than, or equal to each
  other
- are in either ascending or descending order

A binary search repeats a series of steps which repeatedly reduce the search area of the data
structure until either the given value is found or the search area is reduced to zero.

The initial step is as follows:

1. define "start index" as the first index of the array
2. define "end index" as the last index of the array

The repeating steps are as follows:

1. define "middle index" as the index midway between "start index" and "end index"
2. compare the element at "middle index" to the given value
3. when equal, return either `true` (value exists in array) or "middle index" (algorithm is
   finished)
4. otherwise, when less than the given value
   1. set "start index" to "middle index" plus 1
   2. repeat from step 1
5. otherwise (the element is greater than the given value)
   1. set "end index" to "middle index" minus 1
   2. repeat from step 1

These steps have the effect of halving the array after each iteration, meaning that the total number
of iterations is some value less than the total length of the array. For example, the total number
of iterations for an array of length 8 would be 3. To illustrate:

Given the array `[1, 2, 3, 4, 5, 6, 7, 8]`, and the target value of 6.

| step | start index | end index | searchable area            |
| ---- | ----------- | --------- | -------------------------- |
| 1    | 0           | 7         | `[1, 2, 3, 4, 5, 6, 7, 8]` |
| 2    | 5           | 7         | `[_, _, _, _, _, 6, 7, 8]` |
| 3    | 5           | 5         | `[_, _, _, _, _, 6, _, _]` |

On the first step, the middle index between 0 and the length of the array (8) is 4, so the element
to compare is `5`. Since this is less than the target value, the start index is set to the middle
index plus 1 (5), and the search repeats. On the second step, the middle index (between 5 and 8) is
6 (6.5 rounded down). The element to compare here is `7`, which is greater than the target value. So
this time the end index is set to the middle index (6) minus 1 (5), and the search repeats. On the
third and final step, the start index and end index are both 5, so the middle index is also 5. The
element to compare here is `6`, which is equal to our target value. The search ends here.

The iteration count and the length of the given array are mathematically related. Consider that the
length of the array (`n`) is being effectively divided by two some number of times (this is the time
complexity of the algorithm). The math function calculating this number is the **base-2 logarithm of
`n`**. In computer science notation, the time complexity of this algorithm is O(log n), sometimes
written as O(log₂ n).
