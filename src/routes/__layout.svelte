<script>
	import Nav from '$lib/Nav/Nav.svelte';
	import Privacy from '$lib/Privacy.svelte';
	import Footer from '$lib/Footer.svelte';
	import TopScroll from '$lib/UI/TopScroll.svelte';
</script>

<Privacy />
<Nav />
<TopScroll />

<main class="overflow-x-hidden">
	<slot />
</main>

<Footer />

<style global lang="postcss">
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>
