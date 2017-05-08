// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: “June 15, 2014”


function checkCoupon (dataString) {
	today = new Date();
	today.setHours(0,0,0,0);

	todayInt = Date.parse(today);
	dateIntegar = Date.parse(dataString);

	console.log(todayInt);
	console.log(dateIntegar);

	if (todayInt <= dateIntegar) {
			return true;	
	} else {
			return false;
	}
}

