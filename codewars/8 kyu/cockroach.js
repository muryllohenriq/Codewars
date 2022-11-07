// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    // 1 = 100000
    // 1 = 3600
    return Math.trunc((s * 100000) / 3600) 
}

console.log(cockroachSpeed(1.09));