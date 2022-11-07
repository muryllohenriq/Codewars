// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
  var ret = [];
  for(var i=0; i<n; i++){
    ret.push(x);
    x*= x;
  }
  return ret;
} console.log(squares(2,6));