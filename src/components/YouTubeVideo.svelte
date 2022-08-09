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
		width: min(560px, 100%);
		aspect-ratio: 16 / 9;
	}
</style>
