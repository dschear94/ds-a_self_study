// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.


function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);

}

console.log(factorial(4));
console.log(factorial(5));


// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.
//
// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`
//
// Examples:
//
// fib(1) // => 1
// fib(2) // => 1
// fib(3) // => 2
// fib(4) // => 3
// fib(5) // => 5
// fib(6) // => 8
// fib(7) // => 13

function fibonacci(n) {
    if ( n === 1 || n === 2 ) {
        return 1;
    }

    return fibonacci( n - 1 ) + fibonacci( n - 2 );

}


console.log(fibonacci(7));