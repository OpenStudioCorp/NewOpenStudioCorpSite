<script lang="ts">
	export let top: number;
	export let left: number;
	export let delay: number;
</script>

<div style={`top:${top}%; left:${left}%; animation-delay:${delay}ms`} />

<style>
	div {
		transform: scale(0);
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 100%;
		background-color: var(--red);
		animation: scaleIn 1s;
		animation-fill-mode: forwards;
	}
	div:before,
	div:after {
		content: '';
		border-radius: 100%;
		background-color: var(--red);
		opacity: 0.7;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
	div:before {
		animation: pulse 2s ease-out infinite;
	}
	div:after {
		animation: pulse 2s 1s ease-out infinite;
	}
	@keyframes pulse {
		100% {
			transform: scale(2.5);
			opacity: 0;
		}
	}
	@keyframes scaleIn {
		100% {
			transform: scale(1);
		}
	}
</style>
