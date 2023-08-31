<script lang="ts">
	import Gradient from '../Gradient/Gradient.svelte';
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
		<a href="/" class="logo">OpenStudio</a>
		<button class:active-button={navButtonActive} on:click={toggleButtonState}>
			<div />
			<div />
			<div />
		</button>
		<div class="mobile-sidebar" class:mobile-sidebar-visible={navButtonActive}>
			<a href="https://discord.gg/7cFCB8qBkf" target="_blank" class="join-button animation"
				>Join us</a
			>
			<a
				href="/"
				class:active={$page.url.pathname === '/'}
				class="animation"
				on:click={() => (navButtonActive = false)}>Home</a
			>
			<a
				href="/about"
				class:active={$page.url.pathname === '/about'}
				class="animation"
				on:click={() => (navButtonActive = false)}>About</a
			>
			<a
				href="/projects"
				class:active={$page.url.pathname === '/projects'}
				class="animation"
				on:click={() => (navButtonActive = false)}>Project</a
			>
		</div>
	{/if}

	{#if screenWidth >= 1024}
		<Gradient
			position={`${
				$page.url.pathname === '/' ? 'left' : $page.url.pathname === '/about' ? 'center' : 'right'
			}`}
		/>
		<a href="/" class="logo">OpenStudio</a>
		<div class="nav-links">
			<a href="/" class:active={$page.url.pathname === '/'} class="animation">Home</a>
			<a href="/about" class:active={$page.url.pathname === '/about'} class="animation">About</a>
			<a href="/projects" class:active={$page.url.pathname === '/projects'} class="animation"
				>Project</a
			>
		</div>
		<a href="https://discord.gg/7cFCB8qBkf" target="_blank" class="join-button animation">Join us</a
		>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		position: relative;
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
		z-index: 20;
	}
	.logo {
		color: var(--white);
		z-index: 20;
		font-size: 1.4rem;
	}
	button {
		position: relative;
		z-index: 40;
		width: 30px;
		height: 21px;
		margin-right: 1rem;
	}

	button > div {
		width: 50px;
		height: 4px;
		border-radius: 20px;
		background-color: var(--white);
		bottom: 0.5rem;
		position: absolute;
		transition: all 0.3s;
	}

	button > div:nth-of-type(2) {
		bottom: 1rem;
	}

	button > div:nth-of-type(3) {
		bottom: 1.5rem;
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
		z-index: 30;
	}

	.mobile-sidebar-visible {
		inset: 0;
	}

	.join-button {
		background-color: var(--white);
		color: var(--darkBlue);
		border: solid 2px var(--white);
		width: fit-content;
		border-radius: 10px;
		padding: 0.1rem 2rem;
		z-index: 20;
	}
	.join-button:hover {
		background-color: transparent;
		color: var(--white);
	}
	a {
		color: var(--lightGray);
	}

	.active {
		color: var(--white);
		text-decoration: underline;
	}
	.active:hover {
		text-decoration-color: var(--red);
	}
</style>
