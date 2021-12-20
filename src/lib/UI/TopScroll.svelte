<script>
	import { PangolChevronUp } from 'svelte-pangolicons';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	let showButton = false;

	const handleButtonState = () => {
		showButton = window.scrollY > window.innerHeight / 8;
	};

	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	onMount(() => {
		handleButtonState;
	});
</script>

<svelte:window on:scroll={handleButtonState} />

{#if showButton}
	<div
		transition:fade={{ duration: 300 }}
		class="fixed bottom-3 right-3 md:bottom-12 md:right-12 z-30"
	>
		<Button on:click={handleScroll}>
			<PangolChevronUp attributes={{ size: '32' }} />
		</Button>
	</div>
{/if}
