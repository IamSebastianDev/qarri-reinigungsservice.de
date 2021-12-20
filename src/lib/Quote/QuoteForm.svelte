<script>
	import QuoteInput from './QuoteInput.svelte';
	import QuoteCheckbox from './QuoteCheckbox.svelte';
	import QuoteNumber from './QuoteNumber.svelte';
	import QuoteError from './QuoteError.svelte';
	import QuoteSuccess from './QuoteSuccess.svelte';
	import Button from '../UI/Button.svelte';

	export let form;
	export let errors;
	export let response;
	export let services;
</script>

<form on:submit|preventDefault id="angebot-form">
	<h3 class="form-heading">Das bist du:</h3>
	<QuoteInput
		id="name"
		placeholder="Dein Name"
		{errors}
		bind:value={form.name}
	>
		Dein Name:
	</QuoteInput>
	<QuoteInput
		id="email"
		placeholder="E-Mail Adresse"
		{errors}
		bind:value={form.email}
	>
		Deine E-Mail Adresse:
	</QuoteInput>
	<span class="font-semibold text-gray-800 text-lg">oder</span>
	<QuoteInput
		id="phone"
		placeholder="Telefonnummer"
		{errors}
		bind:value={form.phone}
	>
		Deine Telefonnummer:
	</QuoteInput>
	<h3 class="form-heading">Hier ist's dreckig:</h3>
	<QuoteInput
		id="street"
		placeholder="Straße & Hausnummer"
		{errors}
		bind:value={form.street}>Straße & Hausnummer</QuoteInput
	>
	<QuoteInput
		id="city"
		placeholder="Ort & Postleitzahl"
		{errors}
		bind:value={form.city}>Ort & Postleitzahl</QuoteInput
	>
	<h3 class="form-heading">Das brauchst du:</h3>
	<div class="grid grid-cols-1 md:grid-cols-2">
		{#each services as service}
			<QuoteCheckbox
				id="cleaning_{service.formid}"
				name={service.heading}
				bind:checked={form.cleaning[service.formid]}
			>
				{service.heading}:
			</QuoteCheckbox>
		{/each}
		{#if errors.cleaning}
			<QuoteError>
				Bitte wähle mindestens eine Reiniungsart aus.
			</QuoteError>
		{/if}
		<div class="col-span-full flex flex-col md:flex-row">
			<span
				class="flex flex-row text-base sm:text-xl justify-between items-center font-open font-semibold sm:px-12 md:px-8 py-2 select-none;"
				>Ungefähre Quadratmeteranzahl:
			</span>
			<QuoteNumber
				id="cleaning_area"
				placeholder="m² (Optional)"
				min="50"
				max="1000"
				classes="mr-8 ml-auto w-full md:w-1/4"
				{errors}
				bind:value={form.cleaning.area}>Quadratmeteranzahl</QuoteNumber
			>
		</div>
	</div>
	<h3 class="form-heading">Möchstest du uns noch etwas mitteilen?</h3>
	<textarea
		class="border-2 border-gray-800 h-40 text-base justify-between items-center font-open font-semibold p-4 hover:shadow-dark focus:shadow-accent focus:outline-none"
		placeholder="Deine Nachricht an uns (Optional)"
		bind:value={form.message}
	/>
	<h3 class="form-heading">Jetzt sind wir dran:</h3>
	{#if !response}
		<Button type="submit">Abschicken</Button>
		<QuoteCheckbox
			id="privacy_notice"
			name="submit_read_privacy"
			bind:checked={form.privacy}
		>
			<span class="text-sm"
				>Du erklärst dich damit einverstanden, dass deine Daten zur
				Bearbeitung der Anfrage von uns verarbeitet werden. Weitere
				Information findest du in unserer <a
					href="./impressum"
					target="_blank"
					class="hover:text-accent underline">Datenschutzerklärung</a
				>.</span
			>
		</QuoteCheckbox>
		{#if errors.privacy}
			<QuoteError>
				Bitte bestätige, dass du die Datenschutzhinweise gelesen hast
				und damit Einverstanden bist.
			</QuoteError>
		{/if}
	{:else if response.status === 200}
		<QuoteSuccess />
	{:else}
		<QuoteError>
			Fehler: {response.status}
			{response.statusText}
		</QuoteError>
	{/if}
</form>

<style lang="postcss">
	form {
		@apply px-12 pb-12 pt-4 mx-2 md:mx-12 my-4 flex flex-col justify-between bg-white text-gray-800 border-2 border-gray-800;
	}

	.form-heading {
		@apply text-2xl font-poppins font-bold my-4 py-4 text-gray-800;
	}
</style>
