<script>
	import { PangolInfoCircle } from 'svelte-pangolicons';
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ duration: 300 }}
	class="col-span-2 text-left border-2 border-red-600 text-red-600 p-2 my-2 font-semibold flex flex-row items-center"
>
	<span class="mr-4 flex-shrink-0">
		<PangolInfoCircle />
	</span>
	<slot />
</div>
