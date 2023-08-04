<script lang="ts">
	import { page } from '$app/stores';
	let screenWidth: number;
	const toggleButtonState = () => {
		navButtonActive = !navButtonActive;
	};
	let navButtonActive = false;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<nav>
	{#if screenWidth < 1024}
		<a href="/">OpenStudio</a>
		<button class:active-button={navButtonActive} on:click={toggleButtonState}>
			<div />
			<div />
			<div />
		</button>
		<div class="mobile-sidebar" class:mobile-sidebar-visible={navButtonActive}>
			<a href="https://discord.gg/7cFCB8qBkf" class="join-button">Join us</a>
			<a
				href="/"
				class:active={$page.url.pathname === '/'}
				on:click={() => (navButtonActive = false)}>Home</a
			>
			<a
				href="/about"
				class:active={$page.url.pathname === '/about'}
				on:click={() => (navButtonActive = false)}>About</a
			>
			<a
				href="/projects"
				class:active={$page.url.pathname === '/projects'}
				on:click={() => (navButtonActive = false)}>Project</a
			>
		</div>
	{/if}

	{#if screenWidth >= 1024}
		<a href="/">OpenStudio</a>
		<div class="nav-links">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
			<a href="/projects" class:active={$page.url.pathname === '/projects'}>Project</a>
		</div>
		<a href="https://discord.gg/7cFCB8qBkf" class="join-button">Join us</a>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1.5rem;
		margin-top: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.nav-links {
		display: flex;
		width: 30%;
		justify-content: space-around;
	}

	button {
		position: relative;
		z-index: 4;
		width: 30px;
		height: 21px;
	}

	button > div {
		width: 30px;
		height: 2px;
		background-color: var(--white);
		bottom: 5px;
		position: absolute;
		transition: all 0.3s;
	}

	button > div:nth-of-type(2) {
		bottom: 10px;
	}

	button > div:nth-of-type(3) {
		bottom: 15px;
	}

	button.active-button > div {
		top: 50%;
		left: 50%;
	}

	button.active-button > div:nth-of-type(1) {
		transform: rotate(-45deg) translateY(-50%);
	}

	button.active-button > div:nth-of-type(2) {
		display: none;
	}

	button.active-button > div:nth-of-type(3) {
		transform: rotate(45deg) translateY(-50%);
	}

	.mobile-sidebar {
		transition: all 0.3s;
		position: fixed;
		inset: 0 0 0 100%;
		background-color: var(--darkBlue);
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		overflow-x: hidden;
		z-index: 3;
	}

	.mobile-sidebar-visible {
		inset: 0;
	}

	.join-button {
		background-color: var(--white);
		color: var(--darkBlue);
		width: fit-content;
		border-radius: 10px;
		padding: 0.2rem 2rem;
	}

	a {
		color: var(--lightGray);
	}

	.active {
		color: var(--white);
		text-decoration: underline;
	}
</style>
