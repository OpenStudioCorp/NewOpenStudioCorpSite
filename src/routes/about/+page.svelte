<script lang="ts">
</script>

<header>
	<h1>
		We Love Working Together <br /> We
		<img src="/assets/IcOutlineFavorite.svg" alt="heart icon" class="title-icon" /> Working With You
	</h1>
</header>
<main>
	<h2 class="question-text">Who are We?</h2>
	<p class="answer-text">
		we are a independent organisation that allows people to work with others on cool and amazing things!
	</p>
	<h2 class="question-text">What are we doing?</h2>
	<p class="answer-text">
		we make games, music software and apps for people to use to allow them to make or do anything.
	</p>
	<h2 class="question-text">Why did we start this?</h2>
	<p class="answer-text">
		we wanted to make a place where people can freely share and work with others on projects that 
seem cool/amazing!
	</p>
	<h2 class="dev-section-title"><span>{'<'}</span>Meet our devs<span>{'/>'}</span></h2>
</main>

<style>
	* {
		font-size: var(--normalFontSize);
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
	}
</style>
