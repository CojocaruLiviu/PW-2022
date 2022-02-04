const FirstUppercase = ()=> {
	let name;
	name = document.getElementById("name").value;

	console.log(Frstlet(name));
}

const Frstlet = function ucFirst(str) {

	str = str.charAt(0).toUpperCase() + str.slice(1);

	return str;

}
