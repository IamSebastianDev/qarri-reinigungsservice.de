<script>
	import Navlink from './Navlink.svelte';
	import Topbar from './Topbar.svelte';

	import { PangolX, PangolMenu } from 'svelte-pangolicons';

	let shownav = false;

	const toggleNav = () => {
		shownav = !shownav;
		document.querySelector('body').style.overflowY = shownav
			? 'hidden'
			: 'auto';
	};

	const closeNav = () => {
		shownav = false;
		document.querySelector('body').style.overflowY = 'auto';
	};
</script>

<nav class="mb-8">
	<Topbar />
	<div class="nav-bar">
		<ul class="nav-list {!shownav ? 'nav-list-closed' : 'nav-list-open'}">
			<span class="mr-auto hidden md:inline font-semibold">
				<Navlink href="/" title="Home">Q</Navlink>
			</span>
			<Navlink
				on:click={closeNav}
				href="/#leistungen"
				title="Unsere Leistungen">Leistungen</Navlink
			>
			<Navlink on:click={closeNav} href="/kontakt" title="Kontakt"
				>Kontakt</Navlink
			>
			<Navlink
				on:click={closeNav}
				href="/kontakt#angebot"
				title="Jetzt angebot einholen">Angebot</Navlink
			>
			<Navlink on:click={closeNav} href="/referenzen" title="Referenzen"
				>Referenzen</Navlink
			>
		</ul>
		<button class="nav-mobile" on:click={toggleNav}>
			{#if shownav}
				<span class="text-white">
					<PangolX />
				</span>
			{:else}
				<PangolMenu />
			{/if}
		</button>
	</div>
</nav>

<style lang="postcss">
	.nav-bar {
		@apply flex flex-row justify-center md:justify-end items-center max-w-screen-lg mx-auto py-6 border-b-2 border-gray-800;
	}

	.nav-mobile {
		@apply hidden z-50 text-gray-500;
	}

	.nav-list {
		@apply flex flex-row z-40 w-full justify-center font-light;
	}

	@media (max-width: 640px) {
		.nav-list {
			@apply fixed top-0 left-0 w-screen h-screen bg-accent flex flex-col justify-center items-center transition-transform duration-500 ease-out;
		}

		.nav-list-closed {
			transform: translateY(-100%);
		}

		.nav-list-open {
			transform: translateY(0);
		}

		.nav-mobile {
			@apply block px-5 stroke-current;
		}
	}
</style>
