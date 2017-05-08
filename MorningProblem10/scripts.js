// Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning All characters between the first character and the @ (if any) must be letters, numbers, or underscores There must be an @ character (after the points listed just now) After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen The email must end with at least one set of a dot followed by one or more word characters. The input must NOT be case-sensitive The function should return true or false.


function testEmail(email) {
	email = email.toLowerCase();

	if (email.indexOf("@") < 0) {
		return false;
	}

	var beforeAt = email.split("@")[0];

	var afterAt = email.split("@")[1];

	if (beforeAt === "" || afterAt.indexOf(".") < 0 || beforeAt.indexOf(".") > 0) {
		return false;
	}

	afterAt = afterAt.split(".");

	if (afterAt.length > 2 || afterAt[1] === "" || afterAt[0] === "") {
		return false;
	}

	return true;

}