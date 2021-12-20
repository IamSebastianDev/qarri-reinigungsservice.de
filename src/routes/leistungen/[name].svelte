<script context="module">
	export const load = async ({ page, fetch }) => {
		const { name } = page.params;

		const res = await fetch(`/api/services?name=${name}`);

		if (res.ok) return { props: { service: await res.json() } };

		return {
			status: res.status,
			error: new Error(),
		};
	};
</script>

<script>
	import Section from '../../lib/UI/Section/Section.svelte';
	import SectionHeading from '../../lib/UI/Section/SectionHeading.svelte';
	import ServicesNav from '../../lib/Services/ServicesNav.svelte';
	import ServicesLink from '../../lib/Services/ServicesLink.svelte';
	import ContainerText from '../../lib/UI/ContainerText.svelte';
	import ServicesSpectrum from '../../lib/Services/ServicesSpectrum.svelte';

	export let service;
</script>

<svelte:head>
	<title>Qarri Reinigungsservice | Die {service}</title>
</svelte:head>

<Section id="grundreinigung">
	<SectionHeading
		heading="Die {service.heading}"
		description={service.subheading}
	/>
	<ContainerText>
		<img
			slot="image"
			src="/assets/images/services/{service.name}.jpg"
			alt="Reinigung"
			class="object-cover"
		/>
		<div slot="short">
			<h3 class="font-poppins font-semibold text-2xl text-accent">
				Was ist das eigentlich?
			</h3>
			<p class="my-4 text-lg">
				{service.description.long}
			</p>
		</div>
		<ServicesSpectrum services={service.services} />
	</ContainerText>
	<ServicesLink />
	<ServicesNav name={service.name} />
</Section>
