<script>
	export let src;
	export let alt;
	export let href = '';
	export let name = '';
	export let classes = '';
</script>

<div class="relative {classes}">
	<img class="w-full h-full" {src} {alt} />
	<a
		class="absolute bottom-0 left-0 flex flex-row bg-gray-100/25 hover:bg-gray-100 text-gray-800 p-2 backdrop-blur text-xs hover:text-accent"
		{href}
		title={name}
		rel="norefferer noopener"
		target="_blank"
	>
		Quelle: {name}
	</a>
</div>
