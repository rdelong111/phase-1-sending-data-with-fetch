document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const nameinput = document.querySelector('input#name').value;
	const emailinput = document.querySelector('input#email').value;



	submitData(nameinput, emailinput);
});

function submitData(Ninput, Einput) {

	const UserData = {
		name: `${Ninput}`,
		email: `${Einput}`,
	};

	const thePushObject = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(UserData),
	};

	return fetch('http://localhost:3000/users', thePushObject)
		.then((r) => r.json())
		.then((object) => {
			const newitem = document.createElement('li');
			newitem.textContent = `(ID: ${object.id}) (Name: ${object.name}) (Email: ${object.email})`;
			document.querySelector('#userdetails').appendChild(newitem);
		})
		.catch((error) => {
			const errormessage = document.createElement('li');
			errormessage.textContent = error.message;
			alert('There might be an error!');
			document.querySelector('#userdetails').appendChild(errormessage);
		});
};