
// Write a function that takes an array of numbers and creates a new array with only the even numbers from the first array. For instance, if you pass your function an array of [1, 3, 4, 6, 9], your function should return [4, 6]


// var a = [0, 3, 4, 6, 9];
//     b = [];
 
// for (var i = 0; i < a.length; ++i) { 
//     if ((a[i] % 2) === 0) {
//         b.push(a[i]);
//     }
// }



function evenArray(numArray) {
	for (var i = 0; i < numArray.length; i++) {
		if (numArray[i] % 2 === 0) {
			returningArray.push(numArray[i]);
		}
	}
	return returningArray;
}