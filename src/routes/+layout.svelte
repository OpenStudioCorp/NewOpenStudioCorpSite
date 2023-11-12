<script lang="ts">
	import Navbar from '../components/Shared/Navbar/Navbar.svelte';
	import Footer from '../components/Shared/Footer/Footer.svelte';
</script>

<div>
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
