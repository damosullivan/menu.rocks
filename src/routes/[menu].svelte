<script>
	import MenuHeading from '../components/MenuHeading.svelte';
	import MenuRow from '../components/MenuRow.svelte';

	/**
	 * @type {string}
	 */
	export let menu;
</script>

<svelte:head>
	<title>{menu} Menu - menu.rocks</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<h1>{menu}'s Menu</h1>

<table>
	<MenuHeading />
	<MenuRow name="Burger" description="Les Big Mac" price={12} />
</table>

<style>
	h1::first-letter {
		text-transform: capitalize;
	}
</style>
