const ConvertNumb = () => {
	let val = document.getElementById("num").value;
	val = parseInt(val);
	let message = (val < 0) ? '-1' :
		(val > 0) ? '1' :
			(val == 0) ? '0' :
				'Is not a number';

	console.log(message);
}