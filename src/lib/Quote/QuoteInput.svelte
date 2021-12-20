<script>
	import QuoteError from './QuoteError.svelte';

	export let id;
	export let placeholder;
	export let autocomplete = true;
	export let value = '';
	export let errors;
	export let classes = '';
</script>

<label class="hidden" for={id}>
	<slot />
</label>
<input
	on:change
	on:blur
	type="text"
	{id}
	name={id}
	{placeholder}
	{autocomplete}
	bind:value
	class={classes}
/>
{#if errors[id]}
	<QuoteError>{errors[id]}</QuoteError>
{/if}

<style lang="postcss">
	input {
		@apply my-4 p-4 border-2 border-gray-800;
	}

	input:hover {
		@apply shadow-dark;
	}

	input:focus {
		@apply outline-none shadow-accent;
	}
</style>
