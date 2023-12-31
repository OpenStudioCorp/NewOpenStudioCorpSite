<script lang="ts">
	import Card from '../../components/Shared/Card/Card.svelte';
	import MapPin from '../../components/MapPin/MapPin.svelte';
	import PageTransitions from '../../components/Shared/PageTransitions/PageTransitions.svelte';
	import locations from '$lib/locations';
	const ButtonClickHandler = (link: string, target: '_blank' | '_self') => {
		window.open(link, target);
	};
</script>

<header>
	<!-- Google tag (gtag.js) !-->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11332296851"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11332296851');
</script>
	<PageTransitions>
		<h1>
			Let's Make <span class="colored-word">Changes</span> <br />Together, AnyWhere
		</h1>
		<p class="header-description">
			OpenStudioCorporation is the home for all your software needs 
		</p>
        <p class="header-description">If your part of a Company/Corporation that needs software or websites, please hit the button below</p>

		<div class="buttons">
			<button
				class="animation"
				on:click={() => ButtonClickHandler('http://admin-openstudiocorp.free.nf/hire.php', '_blank')}
				>Hire Us</button
			>
			<a href="#main-texts">Explore more</a>
		</div>

		<div class="image-container">
			<img src="/assets/world.svg" alt="world map" />
			{#each locations as location, index}
				<MapPin top={location.top} left={location.left} delay={index * 100} />
			{/each}
		</div>
	</PageTransitions>
</header>

<main>
	<PageTransitions>
		<div class="main-texts" id="main-texts">
			<h2><span>OpenStudioCorp</span> Gets it done</h2>
			<p>
				We are a community of developers, from across the world. We Chat, Learn, Share,
				and Build with each other, and we get it done no matter what it takes!
			</p>
			<a href="https://discord.gg/7cFCB8qBkf" target="_blank">Want to Join?</a>
		</div>
		<div class="projects">
			<h2>What have we built?</h2>
			<div class="projects-cards">
				<Card
					cardData={{
						image: 'projectsLogos/noteblock.png',
						title: 'NoteBlockStudioVR',
						link: 'https://github.com/OpenStudioCorp/OpenNoteBlockStudioVR',
						size: 'small',
						alignment: 'top'
					}}
				/>
				<Card
					cardData={{
						image: 'projectsLogos/PythonicOS.png',
						title: 'PythonicOS',
						link: 'https://github.com/OpenStudioCorp/PythonicOS',
						size: 'small',
						alignment: 'bottom'
					}}
				/>
				<Card
					cardData={{
						image: 'projectsLogos/noteblock.png',
						title: 'OpenStudioIDE',
						link: 'https://github.com/OpenStudioCorp/OpenStudioIDE',
						size: 'small',
						alignment: 'middle'
					}}
				/>
			</div>
			<button
				class="viewAll-button animation"
				on:click={() => ButtonClickHandler('/projects', '_self')}>View All</button
			>
		</div>
	</PageTransitions>
</main>

<style>
	* {
		font-size: var(--normalFontSize);
		z-index: 10;
	}

	.colored-word {
		color: var(--red);
		font-size: var(--titleFontSize);
	}

	h1 {
		font-size: var(--titleFontSize);
		font-weight: bold;
		margin-top: 3rem;
		margin-inline: 0.2rem;
	}

	.header-description {
		color: var(--lightGray);
		margin-top: 2rem;
		text-wrap: balance;
	}

	.buttons {
		margin-top: 2rem;
	}

	.buttons button {
		margin-right: 1rem;
		background-color: var(--red);
		padding-inline: 2rem;
		padding-block: 0.2rem;
		border-radius: 10px;
		font-weight: bold;
		font-size: var(--buttonFontSize);
	}
	.buttons a {
		font-size: var(--buttonFontSize);
		transition: all 0.3s;
		text-decoration: underline;
	}
	.buttons a:hover {
		text-decoration-color: var(--red);
	}
	.image-container {
		display: none;
	}

	h2 {
		margin-top: 4rem;
		margin-inline: 0.2rem;
		font-weight: bold;
		font-size: var(--secondTitleFontSize);
	}

	h2 span {
		color: var(--red);
		font-size: var(--secondTitleFontSize);
		position: relative;
		z-index: 2;
		margin-right: 3px;
	}

	h2 span:before {
		content: '';
		background-color: var(--white);
		width: 100%;
		height: 100%;
		left: -1px;
		z-index: -1;
		position: absolute;
		padding: 3px;
		transform: skew(-3deg) rotate(-3deg);
	}

	.main-texts p {
		text-wrap: balance;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--lightGray);
	}

	.main-texts a {
		color: var(--red);
		text-decoration: underline;
		transition: all 0.3s;
		font-size: var(--buttonFontSize);
	}
	.main-texts a:hover {
		text-decoration-color: var(--white);
	}
	.projects-cards {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block: 2rem;
		gap: 1rem;
	}

	.viewAll-button {
		border: 3px solid var(--white);
		padding-inline: 2rem;
		padding-block: 0.2rem;
		border-radius: 10px;
		margin-bottom: 1rem;
		font-size: var(--buttonFontSize);
	}
	.viewAll-button:hover {
		background-color: var(--red);
		border-color: var(--red);
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
		.image-container {
			position: relative;
			display: block;
			max-width: 70%;
			margin-block: 2rem;
			margin-inline: auto;
		}
		.projects-cards {
			flex-direction: row;
			justify-content: center;
			height: 550px;
			gap: 3rem;
		}
	}

	@media screen and (min-width: 1280px) {
		:root {
			--titleFontSize: 3rem;
			--secondTitleFontSize: 2.5rem;
			--buttonFontSize: 1.5rem;
			--normalFontSize: 1.2rem;
		}
		.projects-cards {
			gap: 5rem;
		}
	}
</style>
