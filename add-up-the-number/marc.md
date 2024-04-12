# [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

Marc's strategy for this function was to use recursion to compute the sum of all
integers from 1 to the given number num. He used the fact that the sum of
integers from 1 to num can be calculated as a recursion until we reach the base
case, which is when num equals 1.

## Implementation

The `addUp(num)` function takes a single parameter `num`, which represents the
number up to which integers will be summed.

In the function, there's a base case check: if num is equal to 1, it returns 1,
as the sum of integers from 1 to 1 is 1.

If the base case is not met, the function enters the recursive case. It returns
num added to the result of calling `addUp(num - 1)`, effectively summing num
with the sum of integers from 1 to num - 1.

The recursion continues until it reaches the base case (when num equals 1). At
this point, the recursion unwinds, and each recursive call contributes to the
overall sum.
