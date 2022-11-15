// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(array) {
    return array.join('\n');
} console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
         [ 10,11,12,13,14 ],
         [ 20,21,22,23,24 ],
         [ 30,31,32,33,34 ]]));

// - String-Templates-Bug-Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

const buildString = (...template) => `I like ${template.join(', ')}!`;

console.log(buildString('Cheese', 'Milk', 'Chocolate'));

// - Filter-out-the-geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  }; console.log(gooseFilter(["African", "Muryllo"]));