// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function EvenOrOdd(number) {
    if (number % 2 == 0) 
    return `${number} is even`
    else return `${number} is odd`
} console.log(EvenOrOdd(4));

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
} console.log(even_or_odd(4));