 // Write a function that takes an array of arrays as an argument and returns an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.

     // For example:

     //  [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];

     //  Would become: 


     // {"Tully": "Family, Duty, Honor", "Stark": "Winter is Coming", "Lannister": "Hear me Roar!", "Martell": "Unbowed, Unbent, Unbroken"}



var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];

function arrayToObj(arrayOfArray) {

	var returningObj = {};
	
	arrayOfArray.forEach(function(innerArray) {
		var key = innerArray[0];
		var value = innerArray[1];
		returningObj[key] = value;
	});

	return returningObj;
}




var houseWordsObj = arrayToObj(houseWords);
//should return an object literal.


