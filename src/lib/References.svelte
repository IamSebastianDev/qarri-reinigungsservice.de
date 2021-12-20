<script>
	import Section from './UI/Section/Section.svelte';
	import SectionHeading from './UI/Section/SectionHeading.svelte';
	import ContainerText from './UI/ContainerText.svelte';
	import Image from './UI/Image.svelte';

	export let refs;
</script>

<Section id="referenzen">
	<SectionHeading
		heading="Unsere Referenzen"
		description="Unsere Erfahrung und Arbeit sprechen für sich."
	/>
	{#each refs as ref}
		<ContainerText>
			<Image
				slot="image"
				src="/assets/images/references/{ref.image.src}"
				alt={ref.name}
				name={ref.image.name}
				href={ref.image.href}
			/>
			<div slot="short">
				<h3 class="font-poppins font-semibold text-2xl text-accent">
					{ref.name}
				</h3>
				<span>{ref.date}</span>
				<p class="my-4 text-lg">
					{ref.description}
				</p>
			</div>
		</ContainerText>
	{/each}
</Section>
