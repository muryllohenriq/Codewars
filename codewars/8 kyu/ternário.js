// - Even-Or-Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
} console.log(even_or_odd(4));

// - ReturnNegative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return num > 0 ? -num : num;
} console.log(makeNegative());