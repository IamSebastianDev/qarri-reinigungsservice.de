<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status,
			},
		};
	};
</script>

<script>
	import Section from '../lib/UI/Section/Section.svelte';
	import SectionHeading from '../lib/UI/Section/SectionHeading.svelte';

	export let error;
	export let status;
</script>

<svelte:head>
	<title>{status} | Qarri-Reinigungsservice</title>
</svelte:head>

<Section id="error">
	<SectionHeading
		heading="Oh nein."
		description="Da ist wohl was schiefgelaufen. Das tut uns leid."
	/>
	<h1 class="font-poppins font-semibold text-6xl mx-auto text-gray-800 py-3">
		{status}
	</h1>
	<h3
		class="font-poppins font-semibold text-1xl mx-auto text-gray-500 uppercase py-3"
	>
		{error.message}
	</h3>
</Section>
