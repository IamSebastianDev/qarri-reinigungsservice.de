<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/references`);

		if (res.ok) return { props: { refs: await res.json() } };

		return {
			status: res.status,
			error: new Error(),
		};
	};
</script>

<script>
	import References from '$lib/References.svelte';
	export let refs;
</script>

<svelte:head>
	<title>Referenzen | Qarri Reinigungsservice</title>
</svelte:head>

<References {refs} />
