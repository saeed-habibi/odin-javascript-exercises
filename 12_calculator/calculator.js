const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(nums) {
	return nums.reduce((result, current) => result * current, 1);
};

const power = function(a , b) {
	return a ** b;
};

const factorial = function(num) {
	const upToNum = [];
	for (let i = 1; i <= num; i++) {
		upToNum.push(i);
	}

	return upToNum.reduce((result, current) => result * current, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
