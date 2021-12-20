<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from './UI/Button.svelte';
	import { PangolCookie } from 'svelte-pangolicons';

	let showModal = 'false';

	onMount(() => {
		showModal = localStorage.getItem('show-privacy-modal') || 'true';
	});

	const handleOnClick = () => {
		showModal = 'false';
		localStorage.setItem('show-privacy-modal', 'false');
	};
</script>

{#if showModal === 'true'}
	<div
		out:fade={{ duration: 300 }}
		class=" z-40 w-screen flex flex-col bg-white md:flex-row justify-between items-center py-6 px-6 md:px-12 fixed bottom-0 left-0 border-t border-gray-200"
	>
		<span class="flex-shrink-0">
			<PangolCookie
				attributes={{
					size: '32',
					strokeWidth: 1.5,
				}}
			/></span
		>
		<p class="md:mx-10 text-center md:text-left p-4">
			Diese Webseite benutzt Javascript und den lokalen Speicher deines
			Browsers für bestimmte funktionen. Du kannst mehr darüber in unserer <a
				class="text-accent underline"
				href="./impressum">Datenschutzerklärung</a
			> erfahren.
		</p>
		<Button on:click={handleOnClick}>Ok!</Button>
	</div>
{/if}
