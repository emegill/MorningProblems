// Write two functions. The first function takes two arguments: an array of strings and a function. The second function takes a string as an argument. The first function should concatenate the strings within the array together and then pass it to the second function. The second function should print the concatenated string to the console. Think: callback functions.

function concatStrings(arrayOfStrings, callbackFunction) {
	var stringToBeReturned ="";
	for (var i = 0; i < arrayOfStrings.length; i++) {
		stringToBeReturned += arrayOfStrings[i] + " ";
	}

	callbackFunction(stringToBeReturned):
}

function printString(string) {
	console.log(string);
}

 function printStringWithPunctuation(string) {
	console.log(string + "!!!!!!!");
}

concatStrings(["hello", "my", "name", "is", "chris"], printString);
