/** @format */

export default (form) => {
	const errors = {};

	// validate the privacy flag

	if (!form.privacy) {
		errors.privacy = true;
	}

	// validate the service section

	if (!Object.values(form.cleaning).includes(true)) {
		errors.cleaning = true;
	}

	// validate the name property of the form

	if (form.name.trim().length === 0) {
		errors.name = 'Bitte teile uns deinen Namen mit.';
	} else if (form.name.trim().length < 3) {
		errors.name =
			'Bitte teile uns deinen vollständigen Namen mit. (Mehr als 3 zeichen.)';
	}

	// validate the email & tel properties

	if (!form.email.trim() && !form.tel) {
		errors.email = 'Bitte teile uns zumindest eine Kontaktmöglichkeit mit.';
		errors.phone = 'Bitte teile uns zumindest eine Kontaktmöglichkeit mit.';
	} else if (
		form.email &&
		!form.email
			.trim()
			.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim
			)
	) {
		errors.email = 'Bitte gib eine gültige E-Mail Adresse ein.';
	} else if (form.phone && form.phone.toString().trim().length < 5) {
		errors.phone =
			'Bitte teile uns deine vollständige Telefonnummer mit. (Sie sollte mehr als 5 stellen haben).';
	} else if (
		form.phone &&
		!form.phone.toString().match(/[0-9\+ \(\)\/]{6,14}[0-9]$/gim)
	) {
		console.log(form.phone);
		errors.phone = 'Bitte teile uns eine gültige Telefonnummer mit.';
	}

	// validate the street and number
	if (form.street.trim().length < 5) {
		errors.street =
			'Bitte teile uns deine vollständige Straße und Hausnummer mit.';
	}

	if (form.city.trim().length < 5) {
		errors.city = 'Bitte teile uns deine Stadt inklusive PLZ mit.';
	} else if (form.city.trim().search(/[0-9]{5}/gim) === -1) {
		errors.city = 'Bitte teile uns deine PLZ mit.';
	}

	// validate
	return errors;
};
