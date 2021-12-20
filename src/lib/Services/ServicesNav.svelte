<script>
	export let servicesData;
	export let name;

	$: services = servicesData.filter((serv) => serv.name !== name);
</script>

<section
	id="leistungen-nav"
	class="max-w-5xl mx-auto border-t-2 border-b-2 border-gray-800 p-2 flex flex-col justify-center items-center"
>
	<h3 class="font-semibold font-poppins text-2xl text-accent p-2 text-center">
		Das bieten wir auch noch an:
	</h3>
	<ul class="flex flex-col md:flex-row justify-center md:items-center">
		{#each services as service}
			<li class="md:mx-4 my-2 flex-col flex">
				<a
					class="text-lg font-poppins font-light p-4 text-center bg-white hover:bg-gray-800 hover:text-white hover:shadow-accent"
					href="./{service.name}"
					title="Die {service.heading}">{service.heading}</a
				>
			</li>
		{/each}
	</ul>
</section>
