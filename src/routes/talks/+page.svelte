<script>
	import YouTubeVideo from '../../components/YouTubeVideo.svelte';
	import talks from '../_talks';
</script>

<svelte:head>
	<title>My Talks</title>
	<meta name="description" content="A collection of Robert Boyd's various technical talks">
</svelte:head>
<header>
	<h1>My Talks</h1>
</header>
<div class="gap-8 m-8">
	{#each talks as talkId}
		<YouTubeVideo id={talkId} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
