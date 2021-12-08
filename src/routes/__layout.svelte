<script lang="ts">
	import links from './_links';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
		* {
			margin: 0;
			padding: 0;
			font-family: Roboto;
		}
		h1 {
			font-weight: 100;
			font-size: 3em;
			padding: 0.25em;
			display: inline-block;
		}
		header {
			white-space: nowrap;
			margin: 0.25em;
			text-align: center;
		}
		p {
			padding: 0.5em;
			margin: 0 1em;
			text-align: center;
		}
		h1 a,
		h1 a:visited,
		h2 a,
		h2 a:visited {
			color: inherit;
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}
		h2 {
			font-weight: 300;
			font-size: 2em;
			margin-top: 1em;
		}
		#svelte {
			height: 100%;
		}
		html {
			overscroll-behavior: none;
			height: 100%;
		}
		body {
			height: 100%;
		}
		@media screen and (min-width: 640px) {
			h1 {
				font-size: 4em;
			}
		}
	</style>
</svelte:head>

<div class="bg" />
<div class="all">
	<div class="all-center">
		<div class="final">
			<slot />
			<footer>
				<a href={links.github}><i class="fab fa-github fa-5x" /></a>
				<a class="home" href="/">Home</a>
				<a href={links.linkedin}><i class="fab fa-linkedin fa-5x" /></a>
			</footer>
		</div>
	</div>
</div>

<style>
	.home {
		font-size: 2.5em;
	}
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
	}
</style>
