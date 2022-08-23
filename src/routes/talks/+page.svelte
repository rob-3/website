<script>
	import YouTubeVideo from '../../components/YouTubeVideo.svelte';
	import talkLinks from '../_talks';
	export const prerender = true;
</script>

<svelte:head>
	<title>My Talks</title>
</svelte:head>
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
