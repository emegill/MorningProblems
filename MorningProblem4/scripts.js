// function funcReverse(z) {
//   var initialArray = (""+z).split('');
//   var reversedArray = [];
//   for (var i = initialArray.length - 1; i >= 0; i--) {
//     reversedArray[i] = parseInt(initialArray.shift(),10);
//   }
//   return reversedArray;
// }

// console.log(funcReverse(12345));


function reverseInt(num) {
	var numArray = String(num).split(" ").reverse();
	for (var i = 0; i < numArray.length;; i++) {
		numArray[i] = parseInt(numArray[i]);
	}

	return numArray;
}