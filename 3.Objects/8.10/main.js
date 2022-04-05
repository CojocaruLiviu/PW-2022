let person = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
	},
	address: `Moldova`
}

let person1 = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
	},
	address: `Moldova`
}

let person2 = new Object();
const combin = (first, second) => {
	const thirth = [];
	for (const i in first) {

		for (const key in second) {

			if (i == key && first[i] == second[key]) {
				thirth[i] = first[i];

			}
		}
	}
	return thirth;
}



thirth = combin(person, person1)


console.log(thirth);