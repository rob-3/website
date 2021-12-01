<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
		* {
			margin: 0;
			padding: 0;
		}
		/* this is all a massive hack to get around background-attachment: fixed
		 * not working well on mobile*/
		.all::before {
			content: '';
			position: fixed;
			z-index: -1;
			display: block;
			top: 0px;
			bottom: 0px;
			left: 0px;
			right: 0px;
			background-image: url('/shutterstock_624908471.jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			width: 100vw;
			height: 100vh;
			overflow: auto;
			scrollbar-gutter: stable;
		}
		.all {
			position: absolute;
			width: 100%;
			height: 100%;
			overflow: auto;
			scrollbar-gutter: stable;
		}
		html {
			overscroll-behavior: none;
		}
	</style>
</svelte:head>

<div class="all">
	<slot />
</div>
