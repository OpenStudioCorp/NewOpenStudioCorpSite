<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class={`gradient ${
		$page.url.pathname === '/' ? 'right' : $page.url.pathname === '/about' ? 'center' : 'left'
	}`}
/>
<footer>
	<div class="footer">
		<div class="footer-links">
			<a href="/" class="animation">Home</a>
			<a href="about" class="animation">About</a>
			<a href="projects" class="animation">Projects</a>
		</div>
		<div class="footer-images">
			<img src="assets/discord-mark-white.svg" alt="discord" class="animation" />
			<img src="assets/github.svg" alt="github" class="animation" />
		</div>
	</div>
	<p>
		Designed and Developed by <a href="https://github.com/sourena-kazemi" target="_blank">Sourena</a
		>
		and
		<a href="https://github.com/Ex-ce-pt" target="_blank">Exedice</a> From
		<a href="https://github.com/OpenStudioCorp" target="_blank">OpenStudio</a>
	</p>
</footer>

<style>
	footer {
		color: var(--lightGray);
		margin-top: 2rem;
		position: relative;
		background-color: var(--midnightBlue);
		padding-block: 1rem;
		z-index: 20;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	p a {
		text-decoration: underline;
		transition: all 0.3s;
	}
	p a:hover {
		color: white;
	}
	.footer {
		display: flex;
		justify-content: space-evenly;
		padding-inline: 2rem;
		flex-direction: column;
		align-items: center;
	}
	.footer-images,
	.footer-links {
		display: flex;
		gap: 1rem;
		color: var(--white);
		margin-bottom: 1rem;
	}
	img {
		width: 30px;
	}
	img:hover {
		stroke: aqua;
	}
	.gradient {
		position: relative;
		display: none;
	}
	.gradient:before {
		content: '';
		width: 300px;
		height: 300px;
		background: radial-gradient(rgba(255, 26, 83, 0.1), rgb(34, 27, 55), rgb(34, 27, 55));
		position: absolute;
		border-radius: 100%;
		top: -150px;
	}
	.left:before {
		left: -150px;
	}
	.right:before {
		right: -150px;
	}
	.center:before {
		left: 50%;
		transform: translate(-50%, 0);
	}
	@media screen and (min-width: 768px) {
		.footer {
			flex-direction: row;
		}
		.footer-links,
		.footer-images {
			margin-bottom: 2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.gradient {
			display: block;
		}
	}
</style>
