const palindromes = function (str) {
	const cleanArr = str.match(/\w/g);
	const cleanStr = cleanArr.join("").toLowerCase();
	const reversedStr = cleanArr.reverse().join("").toLowerCase();

	if (cleanStr === reversedStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
