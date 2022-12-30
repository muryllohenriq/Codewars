"use strict";
function grow(arr) {
    return arr.reduce((prev, curr) => prev * curr);
}
console.log(grow([1, 2, 3]));
