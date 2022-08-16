<script>
	import YouTubeVideo from '../../components/YouTubeVideo.svelte';
	import talkLinks from '../_talks';
</script>

<header>
	<h1>My Talks</h1>
</header>
<div class="gap-8 m-8">
	{#each talkLinks as link}
		<YouTubeVideo src={link} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
