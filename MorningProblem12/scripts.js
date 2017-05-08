 // Write a function that takes an array of arrays as an argument and returns an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.

     // For example:

     //  [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];

     //  Would become: 


     // {"Tully": "Family, Duty, Honor", "Stark": "Winter is Coming", "Lannister": "Hear me Roar!", "Martell": "Unbowed, Unbent, Unbroken"}



var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];

function arrayToObj(ArrayOfArrays) {

	var myObj = {};

	ArrayOfArrays.forEach(function(array){
		var house = array[0];
		var words = array[1];

		myObj[house] = words;

	});

	return myObj;
}
	
var wordsObj = arrayToObj(houseWords);



