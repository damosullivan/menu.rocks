<script>
	import { page } from '$app/stores';

	import MenuHeading from '../components/MenuHeading.svelte';
	import MenuRow from '../components/MenuRow.svelte';

	const menu = $page.params['menu'];
</script>

<h1>{menu}'s Menu</h1>

<table>
	<MenuHeading />
	<MenuRow name="Burger" description="Les Big Mac" price={12} />
</table>
