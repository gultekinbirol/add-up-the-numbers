# [\_sir](https://edabit.com/user/F7iZc3vpy7d9ALD6D)

```js
function addUp(num) {
  return (num * (num + 1)) / 2;
}
```

## Strategy

Sir approached this problem mathematically. He utilize the mathematical formula
for the sum of an arithmetic series, where num is the number up to which
integers will be summed. This formula allows to calculate the sum directly
without iterating through each number individually.

## Implementation

The `addUp(num)` function takes a single parameter `num`, which represents the
number up to which integers will be summed. Sir used the mathematical formula.
The calculated sum is then returned as the result of the function.

This implementation efficiently computes the sum of integers from 1 to a given
number without the need for iterating through each number individually, making
it suitable for scenarios where performance is a concern, especially for large
values of num.
