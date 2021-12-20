/** @format */

export default async (form) => {
	const body = new FormData();

	const { name, email, phone, street, city, cleaning, message } = form;

	const data = {
		name,
		email,
		phone,
		street,
		city,
		...cleaning,
		message,
	};

	console.log(data);

	for (const name in data) {
		if (Object.hasOwnProperty.call(data, name)) {
			const value = data[name];
			body.append(name, value);
		}
	}

	const res = await fetch(window.location.origin + '/scripts/contact.php', {
		method: 'POST',
		body,
	});

	return res;
};
