<script>
	import { PangolChevronRight } from 'svelte-pangolicons';

	export let classes = 'my-8';
	export let href = '/kontakt#angebot';
	export let title = 'Zum Angebot';
</script>

<a
	class="flex flex-row mx-auto font-poppins border-2 border-gray-800 text-gray-800 p-4 hover:bg-gray-800 hover:shadow-accent hover:text-white {classes}"
	{href}
	{title}><slot>Direkt zum Angebot. <PangolChevronRight /></slot></a
>
