const Autorisation = () => {
	let username = document.getElementById("Username").value
	let pasword = document.getElementById("Password").value

	let login = 'login';
	let parol = 'pasword';
	let message = (username == login && pasword == parol) ? 'Hello' :
		(username == login && pasword !== parol) ? 'Incorect pasword' :
			(username !== login && pasword == parol) ? 'Incorect username' :
				'Validation error';

	console.log(message);


}
