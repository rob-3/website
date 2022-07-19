<script>
	export let src = '';
</script>

<iframe
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
		aspect-ratio: 16 / 9;
	}
	@media screen and (max-width: 639px) {
		iframe {
			margin: 1em;
		}
	}
</style>
