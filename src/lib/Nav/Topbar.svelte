<script>
	import {
		PangolLocation,
		PangolPhone,
		PangolEnvelope,
	} from 'svelte-pangolicons';

	let attributes = { 'stroke-width': '1.5', size: '18' };
</script>

<div class="topbar">
	<div class="topbar-container">
		<div class="topbar-segment">
			<PangolLocation {attributes} />
			<span class="px-2">Albert-Schweitzer-Str. 65 | 81735 München</span>
		</div>
		<div class="topbar-segment">
			<PangolPhone {attributes} />
			<span class="px-2">+49 (0) 176 7010 0680</span>
		</div>
		<div class="topbar-segment">
			<a
				href="mailto:info@qarri-reinigungsservice.de"
				class="flex flex-row items-center"
			>
				<PangolEnvelope {attributes} />
				<span class="px-2">info@qarri-reinigungsservice.de</span>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.topbar {
		@apply hidden md:block bg-accent w-screen py-1;
	}

	.topbar-container {
		@apply flex flex-row mx-auto px-3 max-w-screen-lg;
	}

	.topbar-segment {
		@apply text-white stroke-current flex flex-row justify-center items-center text-sm font-light font-poppins align-baseline mr-4;
	}

	.topbar-segment:last-child {
		@apply ml-auto mr-0;
	}
</style>
