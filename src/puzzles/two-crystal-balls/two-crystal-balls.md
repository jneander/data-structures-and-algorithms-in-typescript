# The Two Crystal Balls Problem

There are two crystal balls that will break if dropped from high enough from the ground. Determine
the minimum height from which one will break in the most optimal way.

In code, this puzzle is expressed in two forms. In both, a function returns a number representing
the minimum height.

In the first form, the check to determine whether the ball breaks at a given height is represented
by an array of boolean values. The indices of the array are an analog for height, so the smallest
index having a value of `true` (indicating the ball breaks from this height) is the value to be
determined.

In the second form, the check is provided as a separate function which accepts a numerical height
and returns a boolean value indicating whether or not the ball breaks from the given height. A
maximum height is also provided to limit the search range (a minimum height of 0 is assumed).
Lastly, a numerical step size is provided to govern how precisely the resulting height is
calculated.

The simplest solution would be to start from a height of 0 and incrementally check higher and higher
heights until the ball breaks. This determines the correct answer, but does so without use of the
second ball, and is also inefficient. The time complexity of this approach is linear (to the length
of the input array in the first form, and the maximum height divided by step size in the second
form), O(n).

Another approach might be to partition the search range into successively smaller and smaller ranges
until a breaking height is found (much like a binary search). However, the partitioning will only
determine a smaller range of indeterminate size which starts with a non-breaking height and ends
with a breaking height. The precise height must still be determined from within this range, which
requires another linear search. This still results in a linear time complexity, O(n).
