<script>
	export let href = null;
	export let title = null;
	export let target = '_self';
</script>

<li class="mx-3" on:click>
	<a {href} {title} {target} rel="norefferer noopener">
		<slot />
	</a>
</li>

<style lang="postcss">
	a {
		@apply block sm:inline px-3 py-6 sm:py-3 text-center text-white sm:text-gray-800 font-poppins tracking-wider text-3xl sm:text-lg relative;
	}

	a:hover {
		@apply text-white bg-gray-800 shadow-accent;
	}
</style>
