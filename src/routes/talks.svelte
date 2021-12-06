<script>
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talkLinks from './_talks';
</script>

<div class="all">
	<header>
		<h1>My Talks</h1>
	</header>
	<main>
		{#each talkLinks as link}
			<YouTubeVideo src={link} />
		{/each}
	</main>
</div>

<style>
	.all {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
