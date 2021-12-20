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
	import Hero from '$lib/Hero.svelte';
	import Services from '$lib/Services/Services.svelte';
	import Quote from '$lib/Quote/Quote.svelte';

	export let services;
</script>

<svelte:head>
	<title>Qarri Reinigungsservice | Weil Q für Qualität steht.</title>
</svelte:head>

<Hero />
<Services {services} />
<Quote />
