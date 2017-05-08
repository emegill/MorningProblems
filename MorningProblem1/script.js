// Create two arrays. One Array should contain a few groceries, and the other array should contain prices. Write a for loop that prints to the console a string that says something like “Avocados cost 1.50.” Then print to the console the total cost of the grocery order in your second array.





// var groceryItem = "papaya";
// 	switch(groceryItem) {
// 		case "tomatoes":
// 		console.log ("tomatoes are $.049");
// 		break;
// 		case "limes":
// 		console.log ("limes are $1.49");
// 		break;
// 		case "papaya":
// 		console.log ("papaya are $2.35");
// 		break;
// 		default:
// 		console.log ("Invalid item");
// 		break;
// 	}

	// console.log(groceryItem);

	var shopped = ["cheese", "salad", "taco"];
	var prices = [1.50, 2.00, 3.00];

	var holderTotal= 0;

	for(var t= 0; t<shopped.length; t++) {
		console.log(shopped[t] + "s cost $" + prices[t]);
		holderTotal+= prices[t];
	}


	// Create two arrays. One Array should contain a few names, and the other array should contain foods. Write a for loop that prints to the console a string that says something like “Ariel’s favorite food is macaroni.”

	// var names = ['john', 'bob', 'mike'];

	// var foods = ['pizza', 'pie', 'salad'];

	// for (var i = 0; i < foods.length; i++) {
	// 	console.log(names[i] + " " + "likes" + " " + foods[i]);
	// }

