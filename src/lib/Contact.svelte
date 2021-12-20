<script>
	import {
		PangolDisplay,
		PangolPhone,
		PangolEnvelope,
	} from 'svelte-pangolicons';
	import Section from './UI/Section/Section.svelte';
	import SectionHeading from './UI/Section/SectionHeading.svelte';
</script>

<Section id="contact">
	<SectionHeading
		heading="Wer wir sind"
		description="Telefonisch oder per E-mail. Wir melden uns schnellstmöglich zurück."
	/>
	<div class="flex flex-col mx-2 md:mx-12 lg:border-2 border-gray-800 p-12">
		<p class="text-2xl font-poppins font-light my-4 leading-relaxed">
			<span class="text-accent text-3xl font-semibold"
				>Qarri Reinigungsservice</span
			> <br />
			Shqipron Qarri <br />
			Albert-Schweitzer-Straße 65 <br />
			81735 München
		</p>
		<p class="text-xl font-poppins font-light my-4 leading-relaxed">
			<span class="flex flex-row items-center"
				><span class="mr-1"><PangolPhone /></span>+49 (0) 176 7010 0680</span
			>
			<span class="flex flex-row items-center"
				><span class="mr-1"><PangolEnvelope /></span><a
					href="mailto:info@qarri-reinigungsservice.de"
					>info@qarri-reinigungsservice.de</a
				></span
			>
			<span class="flex flex-row items-center"
				><span class="mr-1"><PangolDisplay /></span><a
					href="https://qarri-reinigungsservice.de"
					>www.qarri-reinigungsservice.de</a
				></span
			>
		</p>
	</div>
</Section>
