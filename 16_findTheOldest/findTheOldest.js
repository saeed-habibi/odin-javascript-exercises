const findTheOldest = function(people) {
	people.sort((a, b) => {
		const ageOfA = a.yearOfDeath ?
			a.yearOfDeath - a.yearOfBirth : 
			new Date().getFullYear() - a.yearOfBirth;

		const ageOfB = b.yearOfDeath ?
			b.yearOfDeath - b.yearOfBirth :
			new Date().getFullYear() - b.yearOfBirth;

		return ageOfA - ageOfB;
	});

	return people.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
