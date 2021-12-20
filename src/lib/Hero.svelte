<script>
	import Section from './UI/Section/Section.svelte';
</script>

<Section id="hero">
	<div
		class="h-s65 relative flex flex-col justify-center items-center select-none"
	>
		<img
			class="object-cover w-screen h-full absolute top-0 left-0"
			src="./assets/images/hero.jpg"
			alt="hero"
		/>
		<h1
			class="font-poppins z-10 text-white text-6xl tracking-wider text-center leading-relaxed font-bold text-shadow"
		>
			<span class="text-9xl tracking-widest text-accent">Q</span>steht für
			<span class="text-7xl tracking-normal font-bold capital"
				>Qualität</span
			>
		</h1>
	</div>
</Section>

<style lang="postcss">
	.text-shadow {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	}
	.capital {
		@apply font-bold font-poppins relative;
	}

	.capital:before {
		content: '';
		position: absolute;
		bottom: 10%;
		right: -10%;

		background: #fe5f55;

		width: 66%;
		height: 36%;

		z-index: -1;
	}

	@media (max-width: 768px) {
		.capital:before {
			display: none;
		}
	}
</style>
