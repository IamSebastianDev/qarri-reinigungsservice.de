<script>
	import { fade } from 'svelte/transition';
	import { PangolCheckmark } from 'svelte-pangolicons';

	const attributes = {
		strokeWidth: 4,
		size: '32',
	};
</script>

<div
	in:fade={{ duration: 300 }}
	class="flex flex-row justify-center items-center p-4 border-2 border-green-600"
>
	<span class="mr-4 flex-shrink-0 text-accent"
		><PangolCheckmark {attributes} /></span
	>
	<h3 class="font-poppins text-sm md:text-lg text-gray-800">
		Vielen Dank für deine Anfrage! Wir melden uns schnellstmöglichst bei
		dir!
	</h3>
</div>
