<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../../components/Shared/Card/Card.svelte';

	// TODO:
	// Projects loading
	const TEST = true;
	const HASHTAGS_IN_PROGRESS_BAR = 30;
	const MAX_QUERY_LENGTH = 30;

	// [0-1]
	let loadingProgress = 0;
	let searchQuery: string;

	$: hashesToFill = Math.floor(loadingProgress * HASHTAGS_IN_PROGRESS_BAR);

	$: if (searchQuery != undefined) {
		// ensures triggering on variable change
		let trimmedQuery = searchQuery.trim();
		if (trimmedQuery.length > MAX_QUERY_LENGTH) {
			trimmedQuery = trimmedQuery.substring(0, 30);
		}

		console.log('searching for: ', trimmedQuery);
	}

	if (TEST) {
		const t = () => {
			if (loadingProgress >= 1) {
				clearInterval(this);
				return;
			}

			loadingProgress += 1 / HASHTAGS_IN_PROGRESS_BAR;
		};

		onMount(() => {
			setInterval(t, 1000);
		});
	}
</script>

<main>
	<div class="projects-load-label">
		<p><span class="red-text">$</span> projects load --all</p>
		<p>
			|__ waiting for your contribution
			{Math.max(Math.min(Math.round(loadingProgress * 100), 100), 0)}%
		</p>
	</div>

	<div class="projects-load-bar">
		<p>
			[
			<span class="red-text">
				{#each Array(hashesToFill) as _}#{/each}
			</span>
			<span class="invisible-text">
				{#each Array(HASHTAGS_IN_PROGRESS_BAR - hashesToFill) as _}#{/each}
			</span>
			]
		</p>
	</div>
	<div class="searchbox-container">
		<div class="search">
			<img src="./assets/MiSearch.svg" alt="" />
			<input type="text" placeholder="Search..." bind:value={searchQuery} />
		</div>
	</div>
	<div class="projects-list">
		<Card
			cardData={{
				image: '',
				title: 'Project one',
				link: '',
				size: 'big',
				description: 'tralala'
			}}
		/>

		<Card
			cardData={{
				image: '',
				title: 'Project two',
				link: '',
				size: 'big',
				description: 'tralala'
			}}
		/>

		<Card
			cardData={{
				image: '',
				title: 'Project three',
				link: '',
				size: 'big',
				description: 'tralala'
			}}
		/>
	</div>
</main>

<style>
	* {
		font-size: var(--normalFontSize);
		z-index: 10;
	}
	main {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.red-text {
		color: var(--red);
	}

	.invisible-text {
		color: transparent;
	}
	.projects-load-label {
		display: flex;
		flex-direction: column;
		align-content: center;
		flex-wrap: wrap;
	}
	.projects-load-label * {
		text-align: left;
		font-size: var(--secondTitleFontSize);
	}
	.searchbox-container {
		margin-block: 2rem;
		display: flex;
		justify-content: center;
	}
	.search {
		display: flex;
		border-bottom: 1px solid var(--lightGray);
		width: 90%;
		max-width: 800px;
	}
	.search img {
		width: 1rem;
	}
	.search input {
		width: 90%;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--white);
	}
	.search input::placeholder {
		color: var(--lightGray);
	}
	.projects-list {
		padding-inline: 1rem;
	}
	.projects-list :global(.big) {
		margin-block: 1rem;
	}
	@media screen and (min-width: 768px) {
		.projects-load-bar *,
		.projects-load-label * {
			font-size: var(--titleFontSize);
		}
	}
	@media screen and (min-width: 1024px) {
		:root {
			--titleFontSize: 2.5rem;
			--normalFontSize: 1.1rem;
		}
		.searchbox-container {
			margin-top: 4rem;
		}
		.projects-list :global(.big) {
			margin-block: 1.5rem;
		}
	}
	@media screen and (min-width: 1280px) {
		:root {
			--titleFontSize: 3rem;
			--normalFontSize: 1.2rem;
		}
	}
</style>
