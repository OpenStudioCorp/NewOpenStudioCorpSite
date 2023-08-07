<script lang="ts">
	export let position: 'left' | 'center' | 'right';
</script>

<div
	style={`${
		position === 'left'
			? 'left:-350px'
			: position === 'right'
			? 'right:-350px'
			: 'left:50%;transform : translate(-50%,0)'
	}`}
/>

<style>
	div {
		position: absolute;
		top: -366px;
		z-index: 10;
		width: 700px;
		height: 700px;
		border-radius: 100%;
		background: radial-gradient(rgba(255, 26, 83, 0.1), rgb(34, 27, 55), rgb(34, 27, 55));
	}
</style>
