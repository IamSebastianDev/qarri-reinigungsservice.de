<script>
</script>

<div
	class="flex flex-col md:grid md:grid-cols-2 mx-8 md:mx-12 my-4 gap-y-8 md:gap-y-0 md:gap-x-10"
>
	<slot name="image" />
	<slot name="short" />
	<div class="col-span-2">
		<slot />
	</div>
</div>
