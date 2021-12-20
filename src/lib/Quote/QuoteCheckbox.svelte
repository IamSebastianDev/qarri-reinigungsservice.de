<script>
	import { PangolCheckmark } from 'svelte-pangolicons';

	export let id;
	export let name;

	export let checked = false;

	const attributes = {
		strokeWidth: 4,
		size: '32',
	};
</script>

<div class="input-container">
	<slot />
	<label for={id}>
		<span class="checkbox" {checked}>
			{#if checked}
				<span class="text-accent">
					<PangolCheckmark {attributes} />
				</span>
			{/if}
		</span>
		<input
			class="hidden"
			type="checkbox"
			{id}
			{name}
			on:change
			value={id}
			bind:checked
		/>
	</label>
</div>

<style lang="postcss">
	.input-container {
		@apply flex flex-row text-base sm:text-xl justify-between items-center font-open font-semibold sm:px-12 md:px-8 py-2 select-none;
	}

	.checkbox {
		@apply w-10 h-10 ml-4 border-gray-800 border-2 grid place-content-center flex-shrink-0 cursor-pointer;
	}

	.checkbox:hover {
		@apply shadow-dark;
	}

	.checkbox[checked='true'] {
		@apply shadow-accent;
	}
</style>
