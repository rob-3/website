<script>
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
	import repoData from './_repos';
	const repos = repoData.map(data => data.repo)
</script>

<header>
	<h1>Robert Boyd</h1>
</header>
<main>
	<p>
		a curious student and software developer at the University of Central Florida passionate about
		programming languages and the web
	</p>
	<div class="flex-horizontal">
		<section class="center">
			<h2><a href="/projects">My Projects</a></h2>
			<GitHubPortfolio {repos}/>
		</section>
		<section class="center">
			<h2><a href="/talks">Most Recent Talk</a></h2>
			<YouTubeVideo src={talks[0]} />
		</section>
	</div>
</main>

<style>
	.flex-horizontal {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
