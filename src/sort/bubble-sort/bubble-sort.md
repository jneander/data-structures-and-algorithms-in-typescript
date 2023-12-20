# Bubble Sort

Bubble sort applies to linear data structures, such as arrays or lists, where the elements have
values which can be mathematically compared as less than, greater than, or equal to each other.

A bubble sort has two levels of iteration. They occur one inside the other, so they are referred to
here as the outer loop and inner loop. The outer loop is a linear walk from the end to the second
position of the structure. The inner loop runs within each iteration of the outer loop. It is a
linear walk from the beginning of the structure to (but not including) the current position of the
outer loop.

For each position (A) of the inner loop's walk, the value stored there is compared to the next
position (B). If the value of A is greater than the value of B, their positions are swapped. The
comparison and potential swap is performed at the next position, and so on. At the end of the first
iteration of the inner loop, the largest position in the structure will have been swapped into the
last position. The next iteration of the outer loop decreases the range of the inner loop, since the
last position no longer needs to be compared.

The result is each element in the structure being incrementally swapped with adjacent elements until
it has reached its ordered position.

The inner loop's range decreases in length with each iteration of the outer loop. The mathematical
representation of these steps is `n²/2 + n/2`. Big-O notation ignores the constant factor of `1/2`
and lower-order terms, which means the time cmmplexity is considered exponential, O(n²).
