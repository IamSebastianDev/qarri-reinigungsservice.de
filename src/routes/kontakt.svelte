<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/services`);

		if (res.ok) return { props: { services: await res.json() } };

		return {
			status: res.status,
			error: new Error(),
		};
	};
</script>

<script>
	import Contact from '$lib/Contact.svelte';
	import Quote from '$lib/Quote/Quote.svelte';

	export let services;
</script>

<svelte:head>
	<title>Kontakt | Qarri Reinigungsservice</title>
</svelte:head>

<Contact />
<Quote {services} />
