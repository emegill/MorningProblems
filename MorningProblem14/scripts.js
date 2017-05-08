// Set a timer for yourself and solve fizzbuzz again without looking at any prior work:
//
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.


function fizzBuzz(){
	for (var i = 1; i <= 100; i++) {
		var result = "";
		if (i % 3 === 0) result += "fizz";
		if (i % 5 === 0) result += "buzz";
		if (result.length === 0 ) result = i;

		console.log(result);
	}

}

fizzBuzz();