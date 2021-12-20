<script>
	export let type = 'button';
</script>

<button {type} on:click><slot /></button>

<style lang="postcss">
	button {
		@apply flex flex-col justify-center items-center font-semibold text-center text-gray-800 font-poppins border-solid border-2 border-gray-800 p-4 my-2 bg-white;
	}

	button:hover {
		@apply bg-gray-800 text-white shadow-accent;
	}
</style>
