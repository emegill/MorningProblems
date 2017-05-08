var grades = [94, 64, 72, 89, 65, 84, 92, 84, 82]; 


// for(var i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// var avg = total / grades.length;
// console.log(avg);


function avetotal(gradesArray){
	var total = 0;

	for(var i = 0; i < gradesArray.length; i++) {
    total += gradesArray[i];

}
	var avg = total / gradesArray.length;
	console.log(avg);
}

function findingMax (groupGrades) {
	var currentLarge = 0;
	for(var i = 0; i < groupGrades.length; i++){
		if(groupGrades[i] > currentLarge){
			currentLarge = groupGrades[i];
}
}
	return currentLarge;
}
function findingMin (groupGrades){
	var currentMin = groupGrades[0];

	for(var i = 1; i< groupGrades.length; i++){
		if(groupGrades[i] < currentMin){
			currentMin = groupGrades[i];
}
}
	return currentMin;
}



