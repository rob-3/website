<script lang="ts">
	import "../app.css";
	import links from './_links';
</script>

<svelte:head>
	<style>
	</style>
</svelte:head>

<div class="bg" />
<div class="all">
	<div class="all-center">
		<div class="final">
			<slot />
			<footer>
				<a href={links.github}><i class="fab fa-github fa-5x" /></a>
				<a href="/"><i class="fas fa-home fa-5x"></i></a>
				<a href={links.linkedin}><i class="fab fa-linkedin fa-5x" /></a>
			</footer>
		</div>
	</div>
</div>

<style>
	/* this is all a massive hack to get around background-attachment: fixed
		 * not working well on mobile*/
	.bg {
		position: fixed;
		z-index: -1;
		display: block;
		top: 0px;
		left: 0px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-image: url('/shutterstock_624908471_med.jpg');
	}
	@media screen and (min-width: 1024px) {
		.bg {
			background-image: url('/shutterstock_624908471_lg.jpg');
		}
	}
	@media screen and (min-width: 2160px) {
		.bg {
			background-image: url('/shutterstock_624908471_xl.jpg');
		}
	}
	.all {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.all-center {
		margin: auto;
		width: min(2600px, 100%);
		height: 100%;
	}
	.final {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	footer {
		margin: auto auto 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: min(100%, 30em);
		padding: 2em;
		box-sizing: border-box;
	}
	footer > * {
		color: black;
		transition: all .15s ease-in-out;
	}
	footer > *:hover {
		color: rgba(0, 0, 0, 0.6);
	}
</style>
