const getTheTitles = function(input) {
	return input.reduce((output, currentBook) => {
		output.push(currentBook.title);
		return output;
	}, []);
};

// Do not edit below this line
module.exports = getTheTitles;
