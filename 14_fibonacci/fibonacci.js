const fibonacci = function(input) {
	const num = Number(input);
	if (num === 0) return 0;
	if (num === 1) return 1;
	if (num < 0) return "OOPS";

	const fibSeq = [0, 1];

	for (let i = 2; i <= num; i++) {
		const nextNumber = fibSeq.at(-1) + fibSeq.at(-2);
		fibSeq.push(nextNumber);
	}

	return fibSeq.pop();
};

// Do not edit below this line
module.exports = fibonacci;
