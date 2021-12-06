<script>
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talkLinks from './_talks';
</script>

<header>
	<h1>My Talks</h1>
</header>
<main>
	{#each talkLinks as link}
		<YouTubeVideo src={link} />
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
