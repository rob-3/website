<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
		* {
			margin: 0;
			padding: 0;
		}
		body {
			background-attachment: fixed;
			background-image: url('/shutterstock_624908471.jpg');
			background-size: cover;
			background-position: center;
		}
		html {
			overscroll-behavior-y: none;
		}
	</style>
</svelte:head>

<slot />
