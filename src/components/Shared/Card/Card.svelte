<script lang="ts" context="module">
	type Props = {
		image: string;
		title: string;
		link: string;
	} & (
		| { size: 'small'; alignment?: 'top' | 'middle' | 'bottom' }
		| { size: 'big'; description: string; skills: string }
	);
</script>

<script lang="ts">
	export let cardData: Props;
</script>

<div
	class={`${cardData.size} card ${
		cardData.size === 'small' && cardData.alignment ? cardData.alignment : ''
	}`}
>
	<div class="image-container">
		<img src={cardData.image} alt={cardData.title} />
	</div>

	<div class="info-container">
		<a href={cardData.link} target="_blank" class="title">{cardData.title}</a>
		<p>{cardData.size === 'big' ? cardData.description : ''}</p>
		{#if cardData.size === 'big' && cardData.skills}
			<p class="skills">{cardData.skills}</p>
		{/if}
	</div>
</div>

<style>
	.card {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
		border-radius: 20px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		transition: all 0.3s;
		position: relative;
		z-index: 10;
	}

	.small {
		width: 250px;
		height: 320px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-container {
		margin-block: 2rem;
		width: 150px;
		height: 150px;
		overflow: hidden;
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		transition: all 0.3s;
		border-radius: 20px;
		width: 120px;
	}

	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.card:hover {
		transform: scale(105%);
	}

	img:hover {
		transform: scale(110%);
	}

	.big {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 900px;
		margin-inline: auto;
	}

	.big .info-container {
		text-align: center;
		margin-inline: auto;
		margin-block: 2rem;
	}

	.info-container p {
		margin-top: 1rem;
		color: var(--lightGray);
	}
	.info-container .skills {
		color: var(--white);
	}

	@media screen and (min-width: 640px) {
		.big {
			flex-direction: row;
		}

		.big .info-container {
			width: 70%;
			text-align: left;
			align-self: flex-start;
			margin-block: auto;
		}

		.big .image-container {
			width: 200px;
			height: 200px;
		}
	}

	@media screen and (min-width: 1024px) {
		.top {
			align-self: self-start;
			margin-top: 1rem;
		}

		.middle {
			align-self: center;
		}

		.bottom {
			align-self: self-end;
			margin-bottom: 1rem;
		}
	}
</style>
