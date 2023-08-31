<script lang="ts">
	import developers from '$lib/developer';
	import Card from '../../components/Shared/Card/Card.svelte';
	import PageTransitions from '../../components/Shared/PageTransitions/PageTransitions.svelte';
</script>

<header>
	<PageTransitions>
		<h1>
			We Love Working Together <br /> We
			<img src="/assets/IcOutlineFavorite.svg" alt="heart icon" class="title-icon" /> Working With You
		</h1>
	</PageTransitions>
</header>
<main>
	<PageTransitions>
		<h2 class="question-text">Who are We?</h2>
		<p class="answer-text">
			We are an independent organisation that allows people to find teammates for working on cool
			and amazing things!
		</p>
		<h2 class="question-text">What do we do?</h2>
		<p class="answer-text">
			We make all kinds of open-source software. Games, apps, websites... whatever you can imagine!
		</p>
		<h2 class="question-text">Why did we start this?</h2>
		<p class="answer-text">
			We wanted to create a place where people can freely bring their project ideas to life without
			having to work by themselves! Communication is the key to learning!
		</p>
		<h2 class="dev-section-title"><span>{'<'}</span>Meet our devs<span>{'/>'}</span></h2>
		<div class="developer-cards">
			{#each developers as developer}
				<Card
					cardData={{
						image: `developerProfiles/${developer.image}`,
						title: developer.name,
						link: developer.link,
						size: 'small'
					}}
				/>
			{/each}
		</div>
	</PageTransitions>
</main>

<style>
	* {
		font-size: var(--normalFontSize);
		z-index: 10;
	}
	h1 {
		margin-top: 3rem;
		font-weight: bold;
		font-size: var(--titleFontSize);
	}
	.title-icon {
		display: inline;
		width: 70px;
	}
	main {
		margin-top: 6rem;
	}
	.question-text {
		font-size: var(--secondTitleFontSize);
		font-weight: bold;
		margin-bottom: 1rem;
	}
	.answer-text {
		margin-bottom: 3rem;
	}
	.dev-section-title {
		margin-top: 6rem;
		font-size: var(--secondTitleFontSize);
		font-weight: bold;
	}
	.dev-section-title span {
		font-size: var(--secondTitleFontSize);
		color: var(--red);
		margin-inline: 10px;
	}
	.developer-cards {
		margin-top: 3rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	@media screen and (min-width: 640px) {
		:root {
			--titleFontSize: 2.2rem;
			--secondTitleFontSize: 1.7rem;
		}
	}
	@media screen and (min-width: 1024px) {
		:root {
			--titleFontSize: 2.5rem;
			--secondTitleFontSize: 2rem;
			--normalFontSize: 1.1rem;
		}
	}
	@media screen and (min-width: 1280px) {
		:root {
			--titleFontSize: 3rem;
			--normalFontSize: 1.2rem;
		}
		.developer-cards {
			row-gap: 3rem;
			column-gap: 6rem;
			max-width: 50%;
			margin-inline: auto;
		}
	}
</style>
