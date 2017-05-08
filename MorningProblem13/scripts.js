// A Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence:

 // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
//
// 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …


// Write a function that takes an integer and returns an array of Fibonacci numbers. The integer should be the length of the array.

// fibNum = function(numMax){
//     for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax; i=j,j=x,k++){
//         x=i+j;
//         fibArray.push(x);
//     }
//     console.log(fibArray);
// }

// fibNum(10)




function fibonacci(num){

	var fibArray = [0,1];

	for (var i = 0; i < num - 2; i++) {
		var lastNum = fibArray[fibArray.length - 1]
		var firstToLastNum = fibArray[fibArray.length -2];
		var fibNum = lastNum + firstToLastNum;

		fibArray.push(fibNum);
		
	}

	return fibArray;

}

