<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
		* {
			margin: 0;
			padding: 0;
		}
		.everything {
			background-attachment: fixed;
			background-image: url('/shutterstock_624908471.jpg');
			background-size: cover;
			background-position: center;
			width: 100vw;
			height: 100vh;
		}
		html {
			overscroll-behavior: none;
			min-height: 100%;
		}
	</style>
</svelte:head>

<div class="everything">
	<slot />
</div>
