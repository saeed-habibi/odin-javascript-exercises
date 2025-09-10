const removeFromArray = function(arr, ...toRemove) {
	for (let i = arr.length - 1; i >= 0; i--) {
		const shouldRemove = toRemove.includes(arr[i]);

		if (shouldRemove) arr.splice(i, 1);
	}

	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
