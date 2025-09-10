const sumAll = function(a, b) {
	if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
	if (a < 0 || b < 0) return "ERROR";

	let firstNum;
	let lastNum;

	if (a < b) {
		firstNum = a;
		lastNum = b;
	} else {
		firstNum = b;
		lastNum = a;
	}

	const nums = [];

	for (let i = firstNum; i <= lastNum; i++) {
		nums.push(i);
	}

	const sum = nums.reduce((total, current) => total + current, 0);

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
