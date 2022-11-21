// - Calculate-BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    var result = weight / (height * height);
    if (result <= 18.5)
    return "Underweight"
    else if (result <= 25.0)
    return "Normal"
    else if (result <= 30.0)
    return "Overweight"
    else return "Obese"
}

console.log(bmi(55, 1.80));

// - CountPositivesSumNegatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
} console.log(countPositivesSumNegatives([1, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, -16]));

// - dna
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}
console.log(DNAStrand("AAAC"));

// - squares-sentece
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
  var ret = [];
  for(var i=0; i<n; i++){
    ret.push(x);
    x*= x;
  }
  return ret;
} console.log(squares(2,6));

// - First Factorial

function FirstFactorial(num) {
  for (var i = num - 1; i >= 1; i--){
  num*= i;
  }
  return num; 
} console.log(FirstFactorial(5));

// - Pythagorean Triple
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

function isPythagoreanTriple(a, b ,c) {
  for (var i = 0; i < a; i++) {
      var resultA = a * a;
  }
  for (var i = 0; i < b; i++) {
      var resultB = b * b;
  }
  for (var i = 0; i < c; i++) {
      var resultC = c * c;
  }
  if (resultA + resultB == resultC)
  return true
  else return false
} console.log(isPythagoreanTriple(3,4,5));