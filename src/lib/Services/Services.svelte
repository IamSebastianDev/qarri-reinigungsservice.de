<script>
	import Section from '../UI/Section/Section.svelte';
	import SectionHeading from '../UI/Section/SectionHeading.svelte';
	import Card from '../UI/Card.svelte';

	import ServicesLink from './ServicesLink.svelte';

	export let services;
</script>

<Section id="leistungen">
	<SectionHeading
		heading="Was wir Leisten"
		description="Egal ob ein bisschen Dreckig oder stark Verschmutzt. Wir finden für
	alles eine Lösung."
	/>

	<div
		class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 text-center md:text-left"
	>
		{#each services as service}
			<Card>
				<h3
					slot="heading"
					class="font-poppins font-semibold text-2xl md:text-3xl my-3 text-center text-accent"
				>
					{service.heading}
				</h3>
				<p class="my-3 font-open font-normal">
					{service.description.short}
				</p>
				<ServicesLink href="/leistungen/{service.name}" classes="my-2"
					>Mehr erfahren!</ServicesLink
				>
			</Card>
		{/each}
	</div>
</Section>
