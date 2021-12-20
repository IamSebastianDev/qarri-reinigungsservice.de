<script>
	export let services = [];
</script>

<h3 class="font-poppins font-semibold text-2xl text-accent py-4">
	Leistungsspektrum
</h3>
<ul class="list-disc list-inside text-lg text-gray-800">
	{#each services as service, index (index)}
		<li>{service}</li>
	{/each}
	<li>...</li>
</ul>
