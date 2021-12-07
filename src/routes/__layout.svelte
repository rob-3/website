<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
		* {
			margin: 0;
			padding: 0;
		}
		/* this is all a massive hack to get around background-attachment: fixed
		 * not working well on mobile*/
		.bg {
			position: fixed;
			z-index: -1;
			display: block;
			top: 0px;
			left: 0px;
			background-image: url('/shutterstock_624908471.jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
		.all {
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
		}
		.all-center {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		html {
			overscroll-behavior: none;
		}
		* {
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
		}
		main {
			width: min(1300px, 100%);
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		p {
			padding: 0.5em;
			margin: 0 1em;
			text-align: center;
		}
		h1 a,
		h1 a:visited {
			color: inherit;
			text-decoration: none;
		}
		a {

		}
		a:hover {
			text-decoration: underline;
		}
		h2 {
			font-weight: 300;
			font-size: 2em;
			margin-top: 1em;
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
		<slot />
	</div>
</div>
