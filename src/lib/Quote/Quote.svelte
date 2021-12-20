<script>
	import Section from '../UI/Section/Section.svelte';
	import SectionHeading from '../UI/Section/SectionHeading.svelte';
	import QuoteForm from './QuoteForm.svelte';

	import validate from '../../scripts/validate';
	import submitForm from '../../scripts/submitForm';

	let form = { cleaning: {} };
	let errors = {};
	let response;

	export let services;

	const handleSubmit = async (ev) => {
		// validate the form and receive the errors object

		errors = validate(form);

		// if no errors have been found, pass the form object to the submit function

		if (Object.values(errors).length === 0) {
			response = await submitForm(form);
			console.log(response);
		} else {
			document.querySelector('#angebot-form').scrollIntoView();
		}
	};
</script>

<Section id="angebot">
	<SectionHeading
		heading="Lass uns Reden"
		description="Der Erste Schritt zur Sauberkeit ist dein persönliches Angebot. Schnell & unverbindlich."
	/>
	<QuoteForm
		on:submit={handleSubmit}
		bind:form
		{errors}
		{response}
		{services}
	/>
</Section>
