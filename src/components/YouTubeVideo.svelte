<script>
	export let src = '';
</script>

<iframe
	height="315"
	{src}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>

<style>
	iframe {
		margin: 2em;
		width: min(560px, 100%);
	}
	@media screen and (max-width: 639px) {
		iframe {
			margin: 1em 0em;
		}
	}
</style>
