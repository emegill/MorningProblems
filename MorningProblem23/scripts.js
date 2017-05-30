// A Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence:

 // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
//
// 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …


// Write a function that takes an integer and returns an array of Fibonacci numbers. The integer should be the length of the array. The first element should always be zero.



var fibonacci_numbers = function(n) {

  if (n===1) {
    return [0, 1];

  } else {

    var z = fibonacci_numbers(n - 1);
    z.push(z[z.length - 1] + z[z.length - 2]);
    return z;
    
  }
};

 console.log(fibonacci_numbers(20));
