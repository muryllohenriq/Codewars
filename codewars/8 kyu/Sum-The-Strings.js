// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
    return String(Number(a)+Number(b));
} 

const sumStr = (a,b) => String(+a + +b);

console.log(sumStr("4", "4"));