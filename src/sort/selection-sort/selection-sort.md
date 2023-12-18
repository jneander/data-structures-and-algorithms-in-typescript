# Selection Sort

Selection sort applies to linear data structures, such as arrays or lists, where the elements have
values which can be mathematically compared as less than, greater than, or equal to each other.

A selection sort has two levels of iteration. They occur one inside the other, so they are referred
to here as the outer loop and inner loop. The outer loop is a linear walk from the beginning to the
end of the structure. The inner loop runs within each iteration of the outer loop. It is a linear
scan from the current position of the outer loop through to the end of the structure, hereafter
referred to as the range. The scan identifies the element with the smallest value in the range and
swaps it into the current position of the outer loop.

The result is each element in the structure being directly swapped into its ordered position.

The inner loop's range decreases in length with each iteration of the outer loop. The mathematical
representation of these steps is `n²/2 + n/2`. Big-O notation ignores the constant factor of `1/2`
and lower-order terms, which means the time cmmplexity is considered exponential, O(n²).
