// - cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    // 1 = 100000
    // 1 = 3600
    return Math.trunc((s * 100000) / 3600) 
}

console.log(cockroachSpeed(1.09));

// - Difference-of-Volumes-of-Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

function findDifference(a, b) {
    return Math.abs(
      a.reduce((previous, current) => previous * current) -
        b.reduce((previous, current) => previous * current)
    );
  }
   console.log(findDifference([3, 2, 5], [1, 4, 4]));

   // - Keep-Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.trunc(time * 0.5)
} console.log(litres(1));

// - Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
console.log(max([2,3]));

// - Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString);
} console.log(getAge("1 years old"));