// Chris Foster [10:01 AM] 
// Write a function that takes an array of names as an argument and returns a string of all of those names separated by commas. For instance, if I pass the array [“Chris”, “Oggi”, “Emily”] the function should return the string “Chris, Oggi, Emily”.

// Then write a function that takes a string as an argument. This function will use the returned value from the first function in order to construct a larger string. For instance, if I pass my second function the string “work here.” then the second function should return “Chris, Oggi, Emily work here.”

// If you finish, make the function return the string with “and” before the last name. For instance: “Chris, Oggi, and Emily work here.”


var names = ["Chris", "Oggi", "Emily"];

function concatArray(namesArray) {
	var returningString = "";

	for (var i = 0; i < namesArray.length; i++) {
		returningString += namesArray[i];
		if (i < namesArray.length - 2) {
			returningString += ", ";
		} else if (i === namesArray.length - 2) {
			returningString += ", and "
		}
	}

	return returningString;
}

function buildSentence(string) {
	var nameString = concatArray(names);
	var sentenceString = nameString + string;
	return sentenceString;
}

